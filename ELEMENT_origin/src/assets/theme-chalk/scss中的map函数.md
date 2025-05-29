## SCSS中的Maps函数
- map-get($map,$key)
 > 根据给定的key值，返回map中的相关的值--说明scss中的数组并不具有索引的能力

- map-merge($map1,$map2)
 > 将两个map合并成一个新的map

- map-remove($map,$key)
 > 从map中删除一个key，返回一个新的map

- map-keys($map)
 > 返回map中所有的key

- map-values($map)
 > 返回map中所有的value

- map-has-key($map,$key)
 > 根据给定的key值判断map是否有对应的value值,如果有返回true否则为false

- keywords($args)
 >返回一个函数的参数，这个参数可以动态的设置key和value