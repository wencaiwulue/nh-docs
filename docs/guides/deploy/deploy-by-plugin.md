import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Deploy by IDE Plugin

:::caution Configuration Needed
You need to have application configuration in your `.nocalhost` folder in your application source code directory. Refer to [Nocalhost Configuration](../nocalhost-config) to 
:::

## Select the Installation Source

1. Select any namespace
2. Click on the <img src={useBaseUrl('/img/icons/install-app-icon.jpg')} width="20" /> icon to deploy application
3. Choose the installation source

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/vs-install-app.png')} />
  <figcaption>Select the installation source</figcaption>
</figure>

Nocalhost supports to 


When you deploy an application by Nocalhost IDE plugin, Nocalhost will analyze the deployment configuration in the `.nocalhost` folder in your application directory, looking for clues on how to deploy your application.
