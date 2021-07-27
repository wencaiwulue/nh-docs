import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Manger Cluster

## Connect to Kubernetes Cluster

Nocalhost supports multi cluster management, There are two methods that you can use to connect to Kubernetes cluster:

<Tabs
  defaultValue="kubeconfig"
  values={[
    {label: 'By KubeConfig', value: 'kubeconfig'},
    {label: 'Past as Text', value: 'text'},
  ]}>
<TabItem value="kubeconfig">

<p>Select the <code>KubeConfig</code> file from any local directory.</p>

:::info Default KubeConfig
Nocalhost will try to load `KubeConfig` from your local `~/.kube/config` by default.
:::

</TabItem>
  
<TabItem value="text">

<p>Past the <code>KubeConfig</code> as a text</p>

:::tip Get KubeConfig
You can use the following command to view your `KubeConfig` and copy it.

```bash
kubectl config view -minify --raw --flattern
```
:::

</TabItem>
</Tabs>

<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
    {label: 'JetBrains', value: 'jet'},
  ]}>
<TabItem value="vscode">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/vscode-add-cluster.gif')} width="250" />
  <figcaption>Connect to cluster</figcaption>
</figure>

</TabItem>
  
<TabItem value="jet">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/idea-connect-cluster.gif')} width="600" />
  <figcaption>Connect to cluster</figcaption>
</figure>

</TabItem>
</Tabs>

## Remove Cluster

:::note KubeConfig Unchanged
Nocalhost will only remove the cluster from the tree list, it will not modify your `KubeConfig`
:::

<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
    {label: 'JetBrains', value: 'jet'},
  ]}>
<TabItem value="vscode">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/vscode-remove-cluster.gif')} width="290" />
  <figcaption>Connect to cluster</figcaption>
</figure>

</TabItem>
  
<TabItem value="jet">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/idea-remove-cluster.gif')} width="600" />
  <figcaption>Connect to cluster</figcaption>
</figure>

</TabItem>
</Tabs>

## View KubeConfig

Right-click the specified cluster and select `View KubeConfig`, the Nocalhost plugin will open the `KubeConfig` of the cluster.

<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
    {label: 'JetBrains', value: 'jet'},
  ]}>
<TabItem value="vscode">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/idea-view-config.gif')} width="600" />
  <figcaption>Connect to cluster</figcaption>
</figure>

</TabItem>
  
<TabItem value="jet">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/vscode-view-config.gif')} width="600" />
  <figcaption>Connect to cluster</figcaption>
</figure>

</TabItem>
</Tabs>

