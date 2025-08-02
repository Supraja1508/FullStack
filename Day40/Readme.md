### AWS S3, EC2 with Nginx, and DNS Record Types


## Setup S3 and Deploy Public Files
Goal: Host static files (images, HTML, etc.) publicly

Steps:
Go to AWS Console → S3 → Create Bucket

Bucket name: must be globally unique (e.g., suji-public-bucket)

Disable "Block all public access"

Enable static website hosting

Upload your HTML/image files

After upload:

Select each file → Permissions → Make public

Go to Properties → Static website hosting → Copy the endpoint URL

 <!-- You can now access your static HTML/images using the S3 public URL -->

## Setup EC2 with Nginx to Host HTML Website

Goal: Launch an EC2 server and use Nginx to serve a website

Steps:
Go to AWS Console → EC2 → Launch Instance

OS: Ubuntu 22.04

Instance type: t2.micro (Free Tier)

Key pair: Create or use existing

Allow HTTP (port 80) and SSH (port 22) in security group

SSH into EC2:

bash
Copy code
ssh -i your-key.pem ubuntu@<ec2-public-ip>
Update and install Nginx:

bash
Copy code
sudo apt update
sudo apt install nginx -y
Upload your HTML files:

bash
Copy code
sudo nano /var/www/html/index.html
# Or use scp to copy files from local:
scp -i your-key.pem index.html ubuntu@<ec2-ip>:/tmp
sudo mv /tmp/index.html /var/www/html/
Start Nginx:

bash
Copy code
sudo systemctl start nginx
Open browser: http://<your-ec2-public-ip>

 <!-- Your HTML site is now hosted using Nginx on EC2 -->

## Learn DNS Record Types (Basics)

RecordType	           Use Case Example
A	                  Maps domain to an IPv4 address (EC2 IP)
AAAA	              Maps domain to IPv6 address
CNAME	              Alias to another domain (e.g., www → root)
MX	                  Used for mail servers
TXT	                  Stores text (e.g., SPF/DKIM verification)
NS	                   Lists nameservers for domain