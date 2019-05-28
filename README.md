# Minima
A Hobby project to replicate express.js functionality with better performance

## Performance vs express

Tool used: `https://github.com/codesenberg/bombardier` 


### Minima.js JSON echo server
```
.\bombardier-windows-amd64.exe -m POST -b '{\"hello\":\"world\"}' -c 1000  localhost:4000/test
Bombarding http://localhost:4000/test for 10s using 1000 connection(s)
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec     22175.06    1991.87   35328.62
  Latency       45.27ms    12.41ms      0.94s
  HTTP codes:
    1xx - 0, 2xx - 221346, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     6.34MB/s
```

### Express.js JSON echo server
```
.\bombardier-windows-amd64.exe -m POST -b '{\"hello\":\"world\"}' -c 1000  localhost:4100/test
Bombarding http://localhost:4100/test for 10s using 1000 connection(s)
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec      9416.73    2166.61   12050.30
  Latency      105.70ms    81.29ms      2.26s
  HTTP codes:
    1xx - 0, 2xx - 95095, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     3.52MB/s
```

## Results
This project is still WIP. it is understandable that express has a lot of features that minima may in future implement. It is wholly possible that performance may decrease with feature overhead in the future
