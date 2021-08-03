import useBaseUrl from '@docusaurus/useBaseUrl';

# What is Nocalhost?

Nocalhost is an open-source IDE plugin for cloud-native applications development:

- **Build, test and debug applications directly inside Kubernetes**
- **IDE Support :** provides easy to use IDEs extension (supports VS Code and JetBrains), developers can leverage the tools they already know.
- **Developing with hot loading:** instantly updates your running container without rebuilding images or restarting containers.

## How does it work?

Nocalhost is composed of a single binary CLI and IDE extension. Ideally, you use it straight with your favourite IDE. Nocalhost does not require a server-side component as it communicates directly to your Kubernetes cluster using KubeConfig, just like kubectl.

## Why Nocalhost?

Although Kubernetes does an excellent job of managing the infrastructure, building Kubernetes applications still be difficult, and it is even harder for large teams of developers. Nocalhost provides the most productive way to build cloud-native applications.

### Made For Collaboration

Nocalhost helps your team to standardize development workflows without requiring everyone on your team to become a Kubernetes expert.

- Kubernetes expert on your team can  
- Developers on your team can

### Declarative Development Workflows

- Mimics your local development workflow to make cloud-based development a breeze 

### Hot Reloading

File Sync

### Compatibility

Nocalhost is battle-tested with many Kubernetes distributions including:

- **Local Kubernetes clusters** like minikube, Microk8s, K3s and Docker Desktop
- **Managed Kubernetes clusters** like TKE (Tencent), ACK (Alibaba Cloud), GKE (Google), Microsoft Azure
- **Self-managed Kubernetes cluster** (e.g. created with KubeSphere or Rancher)




- Nocalhost preconfigured to work with your favorite IDEs