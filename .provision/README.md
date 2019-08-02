## Betterdocs depliver manual

### Requirements

* Ansible 2.8


### Usage

Set betterdocs host in `./provision/hosts` file. And execute commands below:

#### Prepare ansible:

1. Install required roles for setup remote server:

```bash

 $ rake server:requirements
 
```

2. Install system apt packages, deps packages for other tools, set timezone, swapfile. Create user with restricted rights, disable connections to root user:

```bash
 
 $ rake server:prepare
 
```

3. Install nginx, certbot, generate self signed certificates:


```bash
 
 $ rake server:provision
 
```

Manual generating self signed certificates:


```bash
 
 $ sudo openssl req -x509 -days 365 -nodes -newkey rsa:4096 -keyout /etc/nginx/ssl/self.key -out /etc/nginx/ssl/self.crt
 
```

4. Deliver files to remote server:


```bash
 
 $ rake server:delivery
 
```

5. Configure nginx

```bash
 
 $ rake server:nginx
 
```