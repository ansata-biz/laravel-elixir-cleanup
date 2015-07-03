laravel-elixir-del
====================

Elixir Wrapper Around Gulp Del

```
var elixir = require('laravel-elixir');

require('laravel-elixir-del');

elixir(function (mix) {
    if (mix.production)
    {
        mix.del("**/*.map");
    }
});
```

Use this elixir task to remove dev files from your project, e.g. map files