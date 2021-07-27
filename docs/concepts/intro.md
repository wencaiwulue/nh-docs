import useBaseUrl from '@docusaurus/useBaseUrl';

# Introduction

<figure className="img-frame">
  <img src={useBaseUrl('/img/logo.png')} width="300" />
  <figcaption>Most productive way to build cloud-native applications.</figcaption>
</figure>

## Motivation

Because microservice brings development and deployment flexibility and technology versatility, more and more companies choose to use microservice architecture to build applications. At the same time, the rapid development and popularization of cloud-native technology and Kubernetes have further solved the problems of service invocation overhead, distributed system transactions, debugging and service governance of microservices. Therefore, the development trend of modern applications is evolving from the original "monolithic application + cloud" to "microservice + cloud-native".

Although the development trend has greatly improved the efficiency of application operation, maintenance and deployment, but a key node has been forgot: the development phase.

First, although Kubernetes does an excellent job of managing the infrastructure, it brings additional complexity and a steep learning curve. The lack of Kubernetes abstraction for developers affects the development experience and reduces development efficiency. Developers have to spend a lot of energy on concept learning, system configuration, environment deployment, and resource management.

On the other hand, many companies today are in the practice of "microservices", the granularity of splitting is too tiny, leading to a further sharp increase in the number of microservice, and the relationship between services is becoming more and more complex. Various problems are particularly prominent when you want to add new requirements. This leads to the following problems for developers and managers:

> **Developer** :tired_face: How to quickly start a complete development environment? How to quickly debug these dozens or even hundreds of microservices? How to collaborate with other colleagues once the requirements are depends on others?

At the same time, containerization technology solves the problem of environmental consistency in the development, testing, and production stages of microservice applications. But the efficiency of the development feedback loop has caused many dev teams to have a headache. Developers need to wait for several minutes before they can see the result after codes modification. This greatly reduce development efficiency. 

<figure className="img-frame">
    <img src={useBaseUrl('/img/intro/dev-circle-eng.png')} width="500"/>
</figure>

Therefore, although companies can benefit from "microservices + cloud-native". But in fact, the development efficiency of many development teams does not increase but declines, and they cannot experience the "cost reduction and efficiency increase" brought by cloud-native technology.

The end result is that people begin to question the value of Kubernetes to developers themselves: "Why need to bother with all these details instead of focusing on coding?".

## What is Nocalhost?

Nocalhost is a cloud-native development tool based on IDE, and also provides cloud-native solutions,  works to improve your experience creating cloud-native application within your favorite IDE.

-**One-click connect to development environment** Help developers connect to the remote Kubernetes by one click, and get rid of the pesky local environment configurations

-**No need to rebuild or redeploy** When developing, Nocalhost can automatically synchronize the code to container every time you make a change. This way, eliminate the submit, building and pushing cycles, greatly speed up the feedback loop of development. So you see updates in under a second

-**Independent and isolated development space** Each developer can have their own independent development space to ensure that they will not be interfered by others during the development and testing process and process.

-**Visual IDE Plugin** Nocalhost provides JetBrains and VSCode with an easy-to-use IDE plugin. Developers can quickly develop and remotely debug cloud-native applications on the local computer without being familiar with kubectl commands. .

<figure className="img-frame">
    <img src={useBaseUrl('/img/intro/nh-dev-circle-eng.png')} width="500"/>
</figure>