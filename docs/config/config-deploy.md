---
title: Basic
---

# Deployments

Application deployments are configured within the `application` section of the `.nocalhost/config.yaml`

## Example

```yaml
application:                    # struct    | required | Specify application configuration
    name: foo-app               # string    | required | Application name
    manifestType: rawManifest   # srting    | required | Application k8s manifest type
    helmVersion: 0.0.1          # string    | optional | Set default application version for helmRepo
    resourcePath: []            # string[]  | required | Set the application resource path
    ignoredPath: []             # string[]  | optional | 
    onPreInstall:               # struct    | optional | The jobs to be executed before application's installation.
    helmValues:                 # struct    | optional | Overwrite Helm values.yaml
 ```

 ```yaml
 application:
  name: bookinfo                                                    # string    | required | Application name
  manifestType: rawManifest                                         # srting    | required | Application k8s manifest type
  resourcePath: ["manifest/templates"]                              # string[]  | required | Set the application resource path
  ignoredPath: []                                                   # string[]  | optional | Set the application resource path that will be ignored to sync
  onPreInstall:                                                     #struct    | optional | The jobs to be executed before application's installation.
    - path: manifest/templates/pre-install/print-num-job-01.yaml
      weight: "1"
    - path: manifest/templates/pre-install/print-num-job-02.yaml
      weight: "-5"
  env:                                                              # struct    | optional | Inject environment variable for all workload when installed
    - name: DEBUG
      value: ${DEBUG:-false}
    - name: DOMAIN
      value: ${DOMAIN:-coding.net}
```

```yaml
application:                    # struct    | required | Specify application configuration
    name: foo-app               # string    | required | Application name
    manifestType: rawManifest   # srting    | required | Application k8s manifest type
    helmVersion: 0.0.1          # string    | optional | Set default application version for helmRepo
    resourcePath: []            # string[]  | required | Set the application resource path
    ignoredPath: []             # string[]  | optional | 
    onPreInstall: ...           # struct    | optional | The jobs to be executed before application's installation.
    helmValues: ...             # struct    | optional | Overwrite Helm values.yaml
 ```

## Configure Application Name

```yaml
name: foo-app       # required
```

## Configure Application Type

Nocalhost will use the `manifestType` property to deploy applications. 

- **Required**
- **Default Value:** null
- **Supports Types:**
    - **helmGit** - Helm application in Git repository
    - **helmRepo** - Helm application in Helm repository
    - **helmLocal** - Helm application in local directory
    - **rawManifest** - Application with manifest yaml config in Git repository
    - **rawManifestLocal** - Application with manifest yaml config in local directory
    - **kustomizeGit** - Application with manifest yaml config in Git repository
    - **kustomizeLocal** - Application with manifest yaml config in local directory
  
## Configure Helm Version


## Configure Application Source Path

Set application source path, all files in this path will be sync to remote container in development mode. This property corresponds to [`manifestType`](#configure-application-type).

**Default Value:** ["."]

**Configs corresponds to `manifestType`:**

- **helmGit:** chart path: relative path of git repo root.
- **helmLocal:** chart path: relative path of local helm chart path.
- **helmRepo:** no meaning
- **rawManifest:** manifest files path: multi relative paths of git repo root
- **rawManifestLocal:** manifest files path: multi relative paths of local application path
- **kustomizeGit:** kustomize file path: relative path of git repo
- **kustomizeLocal:** kustomize file path: multi relative paths of local application path

:::note
This is the source path configuration at application level
:::




`application[*].ignoredPath`

### `application[*].onPreInstall`

Before installing the application, Nocalhost will execute several jobs as stated below, and wait for the completion of the job execution before installing the application.

```yaml
onPreInstall:
    - path: ...
    - path: ...
```

#### `application[*].onPreInstall.path`

```yaml
path: "job-1.yaml"
    name: xxx-job
    priority: 5
```