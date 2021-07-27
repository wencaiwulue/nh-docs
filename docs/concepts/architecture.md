import useBaseUrl from '@docusaurus/useBaseUrl';

# Architecture

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
