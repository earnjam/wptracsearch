# WPtracSearch

This is a React powered application for searching WordPress Trac tickets using an Elasticsearch cluster. 

## [tracsearch.wpteamhub.com](https://tracsearch.wpteamhub.com)

---

## Background
Search within WordPress Trac is not great. It has fairly robust reporting options, but the full-text search leaves a lot to be desired.

It's so unhelpful that many people have sought alternative solutions, like [Google](https://wordpress.slack.com/archives/C02RQBWTW/p1486058574007525?thread_ts=1486058574.007525) [Site](https://wordpress.slack.com/archives/C02RQBWTW/p1532602145000274) [Search](https://wordpress.slack.com/archives/C02RQBWTW/p1443762011000029) — though there are some thoughts that it's [not as great as it used to be](https://wordpress.slack.com/archives/C02RQC26G/p1546538307093800?thread_ts=1546538307.093800) — or [subscribing to the ticket update email firehose and using Gmail's built-in search](https://wordpress.slack.com/archives/C02RQBWTW/p1444062493000211). But that method is only helpful if you subcribed years ago and have a large archive. 

The other way these solutions fall short is that they don't allow additional filtering on the various taxonomies we use to categorize tickets. 

So I wrote a script to index all WordPress Trac tickets into an Elasticsearch cluster and built this simple interface for searching that system. 


## Credits
This application includes some logic from Ryan McCue's [Not Trac](https://github.com/rmccue/not-trac) — specifically the portions dealing with label coloring, and text parsing/formatting for TracLinks and code blocks. 

## Additional Links
- [WP Elastracsearch](https://github.com/earnjam/wp-elastracsearch) - A PHP package for gathering data from WordPress Trac and indexing it into an Elasticsearch cluster
- [Reactivesearch](https://github.com/appbaseio/reactivesearch/) - Library of components for integrating React applications with Elasticsearch