laravel-elixir-cleanup
====================

Elixir Wrapper Around Gulp Del

```
var elixir = require('laravel-elixir');

require('laravel-elixir-cleanup');

elixir(function (mix) {
    if (mix.production)
    {
        mix.cleanup("**/*.map");
    }
});
```

Use this elixir task to remove dev files from your project, e.g. map files