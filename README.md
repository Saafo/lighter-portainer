<p align="center">
  <img title="lightDOCK" src='https://github.com/saafo/lighter-portainer/blob/develop/assets/images/logo_alt.png?raw=true' />
</p>

[![Docker Pulls](https://img.shields.io/docker/pulls/portainer/portainer.svg)](https://hub.docker.com/r/portainer/portainer/)
[![Microbadger](https://images.microbadger.com/badges/image/portainer/portainer.svg)](http://microbadger.com/images/portainer/portainer 'Image size')

**_lighter-Portainer_** is a web management UI for **_lighterDOCK_**, based on **_Portainer_**.

**_lighterDOCK_** is a lightweight docker aimed at edge computing gateway/server.

**_Portainer_** is a lightweight management UI which allows you to **easily** manage your different Docker environments (Docker hosts or Swarm clusters).
**_Portainer_** is meant to be as **simple** to deploy as it is to use. It consists of a single container that can run on any Docker engine (can be deployed as Linux container or a Windows native container, supports other platforms too).
**_Portainer_** allows you to manage all your Docker resources (containers, images, volumes, networks and more) ! It is compatible with the _standalone Docker_ engine and with _Docker Swarm mode_.

## Getting started

- Deploy lighter-Portainer

  ```bash
  docker pull saafo/lighter-portainer
  ```

  * Use `docker-compose` to deploy:
  
  Create file `docker-compose.yml`:

  ```yaml
  version: '3'
  services:
    portainer:
      image: saafo/lighter-portainer:latest
      restart: always
      ports:
        - 9000:9000
      volumes:
        - /var/run/docker.sock:/var/run/docker.sock
  ```

  * Use `docker` to deploy:

  ```bash
  docker run -d -p 9000:9000 \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    saafo/lighter-portainer
  ```

- [Build lighter-Portainer locally](https://www.portainer.io/documentation/how-to-contribute/)
  - Install the 5 packages below before executing `yarn`
      ```bash
      apt install libtool automake autoconf nasm libpng-dev
      ```
- [Documentation](https://www.portainer.io/documentation/)

## Limitations

lighter-Portainer supports lighterDOCK only. The Docker may operate, however it is not supported.

## Licensing

lighter-Portainer is licensed under the zlib license. See [LICENSE](./LICENSE) for reference.

lighter-Portainer also contains the following code, which is licensed under the [MIT license](https://opensource.org/licenses/MIT):

UI For Docker: Copyright (c) 2013-2016 Michael Crosby (crosbymichael.com), Kevan Ahlquist (kevanahlquist.com), Anthony Lapenna (portainer.io)

rdash-angular: Copyright (c) [2014][elliot hesp]
