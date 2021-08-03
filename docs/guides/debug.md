import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Debugging with Nocalhost

## Remote Debugging

Nocalhost supports remote debugging of applications written in the following languages:

- Java: Refer to **[Remote debugging of Java application](../practice/debug/java)**
- Golang: Refer to **[Remote debugging of Go application](../practice/debug/go)**
- PHP: Refer to **[Remote debugging of PHP application](../practice/debug/php)**
- Python: Refer to **[Remote debugging of Python application](../practice/debug/python)**

## Access Container's Terminal

Nocalhost provides two modes to access the terminal of a target container.

- **Open Remote Terminal:** access container's terminal right within IDE's build-in terminal.
- **Copy Terminal Exec Command:** Nocalhost will copy the execution command of remote terminal, you can paste this command in any terminal tools, run it then access to container's terminal.

<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
    {label: 'JetBrains', value: 'jb'},
  ]}>
<TabItem value="vscode">

**Open Remote Terminal**

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/vs-terminal.gif')} />
  <figcaption>VS Code open terminal</figcaption>
</figure>

**Copy Terminal Exec Command**

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/vs-terminal-exec.gif')} />
  <figcaption>VS Code copy terminal exec command and paste</figcaption>
</figure>

</TabItem>
  
<TabItem value="jb">

**Open Remote Terminal**

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/jb-terminal.gif')} />
  <figcaption>JetBrains open terminal</figcaption>
</figure>


**Copy Terminal Exec Command**

</TabItem>
</Tabs>

## Checking the Remote Logs

Nocalhost comes with a built-in log viewer, to helps you to monitor and debug issues with your container right within your IDE.By default, Nocalhost streams the logs of all containers.

<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
    {label: 'JetBrains', value: 'jb'},
  ]}>
<TabItem value="vscode">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/vs-log-viewer.gif')} />
  <figcaption>VS Code open log viewer</figcaption>
</figure>

</TabItem>
  
<TabItem value="jb">


<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/jb-log-viewer.gif')} />
  <figcaption>VS Code open log viewer</figcaption>
</figure>

</TabItem>
</Tabs>

