initSidebarItems({"fn":[["default_registry","Default registry (global static)."],["gather","Return all `MetricFamily` of `DEFAULT_REGISTRY`."]],"struct":[["CounterHandle","Prometheus CounterHandle"],["GaugeHandle","Prometheus GaugeHandle"],["Histogram","A `Metric` counts individual observations from an event or sample stream in configurable buckets. Similar to a summary, it also provides a sum of observations and an observation count."],["HistogramOpts","A struct that bundles the options for creating a `Histogram` metric. It is mandatory to set Name and Help to a non-empty string. All other fields are optional and can safely be left at their zero value."],["IntCounterHandle","Prometheus IntCounterHandle"],["IntGaugeHandle","Prometheus IntGaugeHandle"],["IntMeasure","Prometheus Histograms do not have i64 variant, `IntMeasure` will convert i64 to float when it records values."],["IntMeasureHandle","Prometheus IntMeasureHandle"],["MeasureHandle","Prometheus MeasureHandle"],["Opts","A struct that bundles the options for creating most `Metric` types."],["Registry","A struct for registering Prometheus collectors, collecting their metrics, and gathering them into `MetricFamilies` for exposition."],["TextEncoder","An implementation of an `Encoder` that converts a `MetricFamily` proto message into text format."]],"trait":[["Encoder","An interface for encoding metric families into an underlying wire protocol."]],"type":[["Counter","A `Metric` represents a single numerical value that only ever goes up."],["CounterVec","A `Collector` that bundles a set of `Counter`s that all share the same `Desc`, but have different values for their variable labels. This is used if you want to count the same thing partitioned by various dimensions (e.g. number of HTTP requests, partitioned by response code and method)."],["Gauge","A `Metric` represents a single numerical value that can arbitrarily go up and down."],["GaugeVec","A `Collector` that bundles a set of `Gauge`s that all share the same `Desc`, but have different values for their variable labels. This is used if you want to count the same thing partitioned by various dimensions (e.g. number of operations queued, partitioned by user and operation type)."],["HistogramVec","A `Collector` that bundles a set of Histograms that all share the same `Desc`, but have different values for their variable labels. This is used if you want to count the same thing partitioned by various dimensions (e.g. HTTP request latencies, partitioned by status code and method)."],["IntCounter","The integer version of `Counter`. Provides better performance if metric values are all integers."],["IntCounterVec","The integer version of `CounterVec`. Provides better performance if metric values are all integers."],["IntGauge","The integer version of `Gauge`. Provides better performance if metric values are all integers."],["IntGaugeVec","The integer version of `GaugeVec`. Provides better performance if metric values are all integers."]]});