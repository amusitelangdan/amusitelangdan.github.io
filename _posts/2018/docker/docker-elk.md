docker安装ELK日志收集系统

1. 安装Elasticsearch.

docker run -d -p 9200:9200 \
                -p 9300:9300 \
                -e "discovery.type=single-node"
                --name elasticsearch elasticsearch:6.5.1


2. 安装kibana

docker run -d -p 5601:5601 \
                --name kibana  \
                --link elasticsearch \
                -e ELASTICSEARCH_URL=http://172.18.183.5:9200 kibana:6.5.1

3. 配置logstash和filebeat

filebeat.yml
```
filebeat:
  prospectors:
    - paths:
        - /tmp/logs/*.log #日志文件地址
      input_type: log #从文件中读取
      tail_files: true #以文件末尾开始读取数据
output:
  logstash:
      hosts: ["{172.18.183.5:5044"] #填写logstash的访问IP
```

logstash.conf
```
input {
  beats {
    port => "5044"
  }
}
filter {
    grok {
            match => { "message" => "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:level} %{JAVALOGMESSAGE:msg}" }
    }
}
output {
  stdout { codec => rubydebug }
  elasticsearch {
        #填写实际情况elasticsearch的访问IP，因为是跨容器间的访问，使用内网、公网IP，不要填写127.0.0.1|localhost
        hosts => [ "172.18.183.5:9200" ]
        index => "%{[fields][doc_type]}-%{+YYYY.MM.dd}"
    }
}
```


启动logstash:
docker run --rm -it --name logstash \
        --link elasticsearch -d \
        -p 5044:5044 \
        -v /docker/logstash/conf/logstash.conf:/usr/share/logstash/pipeline/logstash.conf logstash:6.5.1

启动filebeat
docker run --name filebeat -d \
        --link logstash \
        -v /docker/filebeat/filebeat.yml:/filebeat.yml \
        -v /tmp/logs/:/home/logs/ \
        prima/filebeat:6


echo '127.0.0.1 - - [13/Mar/2017:22:57:14 +0800] "GET / HTTP/1.1" 200 3700 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36" "-"' >> /tmp/logs/test.log
