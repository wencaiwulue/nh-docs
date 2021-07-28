import useBaseUrl from '@docusaurus/useBaseUrl';

# Overview

In this documentation, we will explain the core idea of Nocalhost Server and clarify some technical terms that are widely used in the project.

## The Concepts

:::note
Coming Soon
:::

## How It Works



### Cluster

**Cluster** is a concept of Nocalhost. It usually corresponds to a Kubernetes cluster. Nocalhost supports to connect to multi-clusters, which can be GKE, minikube and microK8s.

In the actual development process, users do not need to know the concept of Cluster, and user's operation under [DevSpace](#devspace) actually rely on the capabilities of Cluster.

#### Cluster Management

:::note "Manage Cluster"
If you want to manage a Cluster，then need to maintain a `KubeConfig` with the cluster's Cluster-Admin role.
:::

Cluster is generally used with DevSpace, if you need to manage Cluster, you refer to [Manage Server](./manage-cluster) 

<figure className="img-frame">
    <img src={useBaseUrl('/img/concept/cluster.png')} />
</figure>

### DevSpace

**DevSpace** is a concept of Nocalhost, which represents a pre-allocated cloud development space managed by Nocalhost. Developers can deploy, uninstall, develop, and debug applications in DevSpace at any time. DevSpaces are isolated from each other. 

Nocalhost also allow developers to share their DevSpaces with other developers for collaborative development. Because of the isolation of DevSpace, it can also be used as a test environment.

<figure className="img-frame">
    <img src={useBaseUrl('/img/concept/devspace-concept.png')} />
</figure>

#### DevSpace Management

If you need to manage **DevSpace**, you can refer to [Manage DevSpace](./manage-devspace) 

### Application

**Application** is a concept of Nocalhost, it is mainly used to manage a set of manifest files you want to apply for local development, it supports both Kubernetes manifest and helm chart. In other words, these manifests usually contain all the k8s resources that your own application depends on. If possible, we should try to keep it to a minimum.

Nocalhost supports three types of applications:

* Manifest
* Helm
* Kustomize

**Application** can be used to create a [DevSpace](#devspace), we recommend using IDE plug-in directly to deploy your application, IDE plugin is worked on the DevSpace created by Application. In other words, after being assigned a DevSpace, the developer can easily develop on the IDE.

After being assigned a DevSpace, you will get a `KubeConfig` to access this DevSpace, `nhctl` or plug-in can deploy the application based on the application's manifest file and `KubeConfig`.

<figure className="img-frame">
    <img src={useBaseUrl('/img/concept/manifest-and-kubeconfig.png')} />
</figure>

So **DevSpace** can actually be approximated as **Application** + **kubeconfig**:

<figure className="img-frame">
    <img src={useBaseUrl('/img/concept/application-and-space.png')} />
</figure>

#### Application Management

If you need to manage **Applications**, you can refer to [Manage User](./manage-user) 

### Service

**Service** is completely different from svc of Kubernetes. Service can be considered as an enhancement of Deployment, corresponding to a specify service in your application. **Service** currently supports:

- Configure the Nocalhost Dev-Mode, such as which directory after entering the DevContainer, which files are synchronized to the development container, etc.
- Supports deployment startup sequence control based on dependencies

#### Service Configuration

Read [Service Configuration](../guides/service-config).

:::note
Service configurations are not necessary, only needs to be configured when you need it.
:::

### User

**User** belongs to the independent concept of Nocalhost, it's **different** with user in Kubernetes. When you use `Nocalhost Server` and Nocalhost Plugins, User is used to identify your identity and access control to resources. 

<figure className="img-frame">
    <img src={useBaseUrl('/img/concept/user-and-space.png')} />
</figure>

There are two types of **User** in Nocalhost: **Standard User** and **System Admin**

#### Standard User

- Can only log in IDE Plugin, users can develop under their own DevSpace. these DevSpace are all created by Administrator.

- User can only see their own DevSpace, and have all the permissions under these DevSpace, such as install, uninstall (deploy and destroy), enter DevMode and port-forwarding.

- Cannot log in to Nocalhost-Web, nor can they delete the DevSpace, or disassociate it from the DevSpace, which is very similar to the admin permission under a certain namespace of Kubernetes.

#### System Admin

- Has the permission to access `Nocalhost Server`, and with all the permissions in Nocalhost Web, such as create and manage Application, Cluster, User, DevSpace, etc

- Have all the permissions of **User**, such as logging in at IDE plugins, develop in their own DevSpace list

#### User Management

If you need to manage **User**, you can refer to [Manage User](./manage-user) 

