# LinkedinRescue

A professional service website built with Next.js and Tailwind CSS to help people restore their LinkedIn accounts.

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)

## Features

- Modern responsive design
- Blog functionality
- Contact form
- Testimonials
- Pricing information
- SEO optimized

## AWS Deployment

This project is set up with GitHub Actions to automatically deploy to AWS S3 and CloudFront when changes are merged into the main branch.

### First-time AWS Setup

Follow these steps to set up the AWS infrastructure for the first time:

#### 1. Create an S3 Bucket

1. Log in to the AWS Management Console
2. Navigate to S3 and click "Create bucket"
3. Enter a unique bucket name (e.g., `linkedinrescue-website`)
4. Choose your preferred region
5. Uncheck "Block all public access" (since this will be a public website)
6. Acknowledge the warning
7. Enable static website hosting:
   - Navigate to the bucket properties
   - Under "Static website hosting," choose "Use this bucket to host a website"
   - Set "index.html" as the Index document and "404.html" as the Error document
   - Save changes

#### 2. Create a CloudFront Distribution

1. Navigate to CloudFront in the AWS Management Console
2. Click "Create Distribution"
3. For "Origin Domain," select your S3 bucket
4. For "Origin Access," choose "Legacy access identities" and create a new OAI
5. Set "Viewer protocol policy" to "Redirect HTTP to HTTPS"
6. For "Default root object," enter "index.html"
7. Under "Custom error responses," add:
   - HTTP error code: 403, Response page path: /index.html, HTTP response code: 200
   - HTTP error code: 404, Response page path: /404.html, HTTP response code: 200
8. Click "Create Distribution"
9. After creation, note your CloudFront distribution ID and domain name

#### 3. Update Bucket Policy

1. Go back to your S3 bucket
2. Navigate to the "Permissions" tab
3. Click "Bucket Policy" and add a policy like this (replace the placeholders):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity YOUR_OAI_ID"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}
```

#### 4. Set up GitHub Secrets

Add the following secrets to your GitHub repository:

1. `AWS_ACCESS_KEY_ID`: Your AWS Access Key
2. `AWS_SECRET_ACCESS_KEY`: Your AWS Secret Key
3. `AWS_REGION`: Your AWS region (e.g., `us-east-1`)
4. `S3_BUCKET`: Your S3 bucket name (e.g., `linkedinrescue-website`)
5. `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID

#### 5. First Deployment

After setting up the infrastructure and GitHub secrets:

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at your CloudFront domain (e.g., `dxxxxxxxxxx.cloudfront.net`)

#### 6. Custom Domain (Optional)

To use a custom domain:

1. Register a domain through AWS Route 53 or another registrar
2. Create an SSL certificate through AWS Certificate Manager
3. Update your CloudFront distribution to use this certificate
4. Add your domain as an alternate domain name in CloudFront
5. Create DNS records pointing to your CloudFront distribution

## Local Development

### Prerequisites

1. Node.js LTS version (recommended v18+)
2. npm or yarn

### Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
# or
yarn build
```

This will generate a static site in the `out` directory that can be deployed to any static hosting service.

## Documentation

The documentation for the Material Dashboard is hosted at our [website](https://www.material-tailwind.com/docs/react/installation?ref=readme-ntpp).

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Resources

- [Live Preview](https://demos.creative-tim.com/nextjs-tailwind-portfolio-page?ref=readme-ntpp)
- [Download Page](https://www.creative-tim.com/product/nextjs-tailwind-portfolio-page?ref=readme-ntpp)
- Documentation is [here](https://www.material-tailwind.com/docs/react/installation?ref=readme-ntpp)
- [License Agreement](https://www.creative-tim.com/license?ref=readme-ntpp)
- [Support](https://www.creative-tim.com/contact-us?ref=readme-ntpp)
- Issues: [Github Issues Page](https://github.com/creativetimofficial/nextjs-tailwind-portfolio-page/issues)
- [Nepcha Analytics](https://nepcha.com?ref=readme) - Analytics tool for your website

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Nextjs + Tailwind Portfolio Page. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Nextjs + Tailwind Portfolio Page. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/product/nextjs-tailwind-portfolio-page?ref=readme-ntpp).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us?ref=readme-ntpp) instead of opening an issue.

## Licensing

- Copyright 2023 [Creative Tim](https://www.creative-tim.com?ref=readme-ntpp)
- Creative Tim [license](https://www.creative-tim.com/license?ref=readme-ntpp)

## Useful Links

- [More products](https://www.creative-tim.com/templates?ref=readme-ntpp) from Creative Tim

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)

- [Freebies](https://www.creative-tim.com/bootstrap-themes/free?ref=readme-ntpp) from Creative Tim

- [Affiliate Program](https://www.creative-tim.com/affiliates/new?ref=readme-ntpp) (earn money)

##### Social Media

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>
