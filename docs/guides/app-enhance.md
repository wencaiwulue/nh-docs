# Application Enhancement

Base on Kubernetes, Nocalhost provides some enhancements to applications. You can add a `.nocalhost/` folder under your project repository and add [config.yaml](../reference/nh-config) file.

:::info "No Intrusion"
Nocalhost has no intrusion into the user's Kubernetes manifest configuration
:::


## Pre-Install

Nocalhost allows users to perform some additional operations before installing and deploying applications. Take [bookinfo](https://github.com/nocalhost/bookinfo) as an example, before installing the application, we will execute several jobs as stated below, and wait for the completion of the job execution before installing the application.

```yaml {1}
onPreInstall:
  -path: manifest/templates/pre-install/print-num-job-01.yaml
    weight: "1"
  -path: manifest/templates/pre-install/print-num-job-02.yaml
    weight: "-5"
```

## Start Dependency Management

Nocalhost can control the startup sequence of services within the application.

For example, the following configuration, which represents the `Deployment` of `ratings`, needs to wait for the `pod` of `productpage` to be available before starting.

```yml {3}
name: ratings
serviceType: deployment
dependLabelSelector:
  pods:
    - productpage
```

You can refer to [Service Specify Startup Sequence Dependency](./service-config#service-specify-startup-sequence-dependencies) for more information.

### Dev Image Configuration

Nocalhost can specify the image of the development container, for example:

```yml {5}
containers:
...
    dev:
      gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git
      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage
...
```

In the above configuration, the image `python:3.7.7-slim-productpage` will replace the original image for development when entering the DevMode.

For more information, please refer to [Configure DevContainer](./devcontainer-config)

## Advanced Configuration

Here will explain some additional features or design of `Application`, which is not necessary, but it will help you to use Nocalhost better.

### Application Name

Nocalhost uses a unique Application Name to distinguish different applications. Note that even if different `Nocalhost Server` are used (for example, two or more sets are deployed), the same Application Name is not supported on the same development machine.

### `~/.nh` Directory

Note that in the `~/.nh/` directory, `nhctl` and the IDE plugin will store some files to save the current application deployment, development, etc. Normally, you do not need to touch these files.