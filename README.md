![image](http://res.cloudinary.com/dtoqqxqjv/image/upload/c_scale,w_112/v1534700660/github/Garnet_PNG_Clipart-794.png)

# BetterDocs aka Ruby.Fundamental Web [![Build Status](https://travis-ci.org/symbiod/betterdocs.svg?branch=master)](https://travis-ci.org/symbiod/betterdocs) [![Open Source Helpers](https://www.codetriage.com/symbiod/betterdocs/badges/users.svg)](https://www.codetriage.com/symbiod/betterdocs)
### This repo is web adoptation [Ruby.Fundamental](https://github.com/khusnetdinov/ruby.fundamental). It keeps examples with description modern principles, patterns.

## Content

- Gotchas
- Meta Programming
- Functional Programming
- Threads
- Solid Pronciples
- Design Patterns
- Data Structures
- Algorithms
- Become Ruby Meister
- Interview Questions

## Contributing

Before open issue or PR, please check [contributing guide](CONTRIBUTING.md) for guidelines about how to proceed. Every contributor is expected to follow [code of conduct](CODE_OF_CONDUCT.md).

## Development

For setup development environment it requires:

* Ruby 2.5.1
* NodeJS v10

In terminal:

```
git clone https://github.com/symbiod/betterdocs/
cd betterdocs
npm install
bundle install

jekyll serve
```

### Setup with Vagrant

Vagrant unify development for different OS users.
Setup environment requires preinstalled:

* [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
* [Vagrant](https://www.vagrantup.com/downloads.html)

In terminal:

```
git clone https://github.com/symbiod/betterdocs/
cd betterdocs
vagrant up
```

Now vagrant virtual machine is runing enter to it:

```
vagrant ssh
```

Betterdocs is locate in `/app` on guest machine;

```
cd /app
```

Run vagrant (It requires host option for proper port binding, and it can depend on OS):

```
jekyll serve --host 0.0.0.0
```

## About

Betterdocs is created and maintained by GeveMePOC team.

![image](https://res.cloudinary.com/dtoqqxqjv/image/upload/v1542140314/poc_kdjm9g.png)

We love open source software!.

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
