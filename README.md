# cx-tech-days

## Update the EC2 Instance

1. Connect to the EC2 Instance via ssh

```bash
sudo ssh -i ./cx_tech_day_key.pem ec2-user@3.120.146.196
```

2. change directory to the project folder
3. Look up which Containers are running

```bash
sudo docker ps
```

4. Stop the Containers

```bash
sudo docker stop CONTAINER ID

sudo docker rm <the-container-id>
```

5. pull the new repository from Github

```bash
git pull
```

6. navigate to the frontend and backend folder

```bash
cd frontend [oder] backend
```

7. Build the docker images for each frontend and backend

```bash
sudo docker build -t cx-backend .
```

```bash
sudo docker build -t cx-frontend .
```

8. execute the docker images

→ Backend:

```bash
sudo docker run -p 5000:5000 -d --restart unless-stopped cx-backend:latest
```

→ Frontend:

```bash
sudo docker run -d -p 80:3000 -p 3000:3000 cx-frontend:latest
```

9. close the connection to the EC2 Instance

```bash
exit
```
