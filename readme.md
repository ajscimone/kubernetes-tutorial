
## Docs

https://kind.sigs.k8s.io/docs/user/quick-start/

## Create typescript express app

Create app:

```bash
npm init --yes
npm install express dotenv
npm install @cloudnative/health-connect
```

Test locally:
`docker build -t kubernetes-tutorial:latest . && docker run --init --rm -p 8080:8080 kubernetes-tutorial:latest`

## Create Kind Cluster
Create a cluster from the default node image
`kind create cluster --name <name>`
the --name flag is optional, you will get a cluster named "kind" if it is left off.

List clusters
`kind get clusters`

Delete a Cluster
`kind delete cluster --name <cluster-name>`

## Loading an Image Into Your Cluster 🔗︎ 

```bash
docker build -t kubernetes-tutorial:latest .
kind load docker-image kubernetes-tutorial:latest
kubectl apply -f tutorial-pod.yml
kubectl apply -f tutorial-service.yml
```

## Interacting

Show pods:
`kubectl get pods`

Delete pod:
`kubectl delete pod kubernetes-tutorial`

Show services:
`kubectl get services`

Delete service
`kubectl delete svc tutorial-service`

Get service
`kubectl get svc tutorial-service`

Forward the port on the pod:
`kubectl port-forward kubernetes-tutorial 8080:8080`

Get deployments
`kubectl get deployments`