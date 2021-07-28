import useBaseUrl from '@docusaurus/useBaseUrl';

# Architecture and Core Concepts

In this documentation, we will explain the core idea of Nocalhost and clarify some technical terms that are widely used in the project.

## Architecture

The overall working diagram of Nocalhost is as follows:

<figure>
    <img src={useBaseUrl('/img/intro/nh-architecture.jpeg')} />
</figure>

### IDE Plugins

IDE plugin packs the capabilities of nhctl and nocalhost-api development environment management to provide users with a better experience.

### nhctl

nhctl is the core component of nocalhost, here are the core features:

#### Deploy/Uninstall Applications

Nocalhost can deploy applications to Kubernetes cluster or uninstall application from DevSpace.

#### Hot Reloading Via File Sync

Any changes made to the local source codes will be synchronized to the remote DevContainer automatically. Developer can recompile and restart their process to verify code changes. In the future, we will support configure hotreload commands instead of restart processes manually. 

### nocalhost-web

nocalhost-web provides a web dashboard to manage users, development kubernetes clusters, applications and DevSpaces.

### nocalhost-api

Nocalhost manages serviceAccount, namespace and application in kubernetes cluster through api-server, and persists to database, providing data support for IDE plugin usage.

### nocalhost-dep

* When application microservices are deployed in a Kubernetes cluster, there is no way to controler the startup sequence and dependencies of these microservices. A typical scenario is: Service A and Service B both rely on Mysql, Redis, RabbitMQ. Service A and Service B cannot be started unless these dependent services are available. 

* Usually developers have to wait the Pod's restarting rely on Kubernetes' HealthCheck Probe. After restarting again and again, the time interval will be very long. This is why many large system running in Kubernetes start up extremely slow.

* By implemented a Kubernetes Admission Webhook like Istio injecting Sidecar, nocalhost-dep can controls the starting order. 

* When applications deployed, nocalhost-dep will inject InitContainers into the workload automatically. According to declared dependencies, nocalhost-dep keeps waiting for the dependent services's availability. 

* Once all dependent service become available, the InitContainer exits, then the containers which container business logics start. There is no restarting, which means minimal time waiting of starting.

## Core Concepts

### DevMode

**DevMode** refers to a **state** corresponding to the microservice workload when the developer uses Nocalhost for microservice development. In this state, the workload will be converted into a mode that can easily support developers to develop debugging programs.

In the existing Nocalhost development environment that based on Kubernetes, the main changes in DevMode are as follows:

* The number of copies of the workload will be adjusted to 1
* The Pod's health check will be disabled (it is convenient to keep trying to restart the process for debugging during the development)
* Pod container will be replaced with [DevContainer](#devcontainer)
* SecurityContext will be disabled
* A Nocalhost-Sidecar container will be injected into Pod, in order to support remote file synchronization 
* Pod will be added with a Volume to support file sharing between DevContainer and Nocalhost-Sidecar

### DevContainer

**DevContainer** is a basic environment for users to support the development and debugging of a specify microservice component. This environment is packaged into a container, which often contains a full set of SDKs , development and debugging tools, and other tools for developing this microservice component. When the service workload is switched to [DevMode](#devmode), Nocalhost will use **DevContainer** to replace the original workload container.

**DevContainer's** life cycle runs through the entire development and debugging process, it created when DevMode starts. During the life cycle, local source code changes will be automatically synchronized to **DevContainer**, and can be directly compiled and deployed in the container.

#### DevContainer Configuration

Read [Configure DevContainer](../guides/devcontainer-config)。