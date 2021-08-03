# Config Reference

For full Nocalhost config specs, please refer to [Nocalhost Config Specs](../reference/nh-config)

## `configProperties`

```yaml
configProperties:               # struct    | required | Specify config properties
    version: v2                 # string    | required | config file version
    envFile: env.dev            # string    | optional | env file name, substitution variable for this file
```

## `application`

Nocalhost will use these configurations to deploy your application.

```yaml
application:                    # struct    | required | Specify application configuration
    name: foo-app               # string    | required | Application name
    manifestType: rawManifest   # srting    | required | Application k8s manifest type
    helmVersion: 0.0.1          # string    | optional | Set default application version for helmRepo
    resourcePath: []            # string[]  | required | Set the application resource path
    ignoredPath: []             # string[]  | optional | 
    onPreInstall: ...           # struct    | optional | The jobs to be executed before application's installation.
    helmValues: ...             # struct    | optional | Overwrite Helm values.yaml
    env: ...                    # struct    | optional | Inject environment variable for all workload when installed
    envFrom: ...                # struct    | optional | Use envFile to inject environment variable for all workload when installed
    services: ...               # struct    | optional | Applications' services configurations
```

[Learn more about how to configure application deploying.](./config-deploy)

### `application[*].onPreInstall`

```yaml
onPreInstall:
    - path: "job-1.yaml"        # string    | required | Job's yaml file, the relative path of the root directory
      name: foo-job             # string    | required | Job's name
      priority: -1              # integer   | required | Order of execution of job, the smallest will be executed first
```

### `application[*].helmValues`

```yaml
helmValues:
    - kye: DOMAIN                           # string    |
      value: ${DOMAIN:-www.coding.com}      # string    |
```

### `application[*].env`

```yaml
env:
    - name: DEBUG               # string    | 
      value: ${DEBUG:-true}     # string    |
```

### `application[*].envFrom`

```yaml
envFrom:
    envFile:                    # string[]  |
      - path: dev.env           # string    |
      - path: dev.env
```

### `application[*].services`

```yaml
services:
    - name: foo-service                 # string    | required | Name of the service, also is the display name in cluster
      serviceType: deployment           # string    | required | The Kubernetes Workloads type corresponding to the service
      dependLabelSelector: ...          # struct    | optional | Dependent Pods label selector 
      container: ...                    # struct    | optional | 
```