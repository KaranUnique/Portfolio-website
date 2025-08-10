# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Create Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Portfolio Contact from {{from_name}}

Hi Karan,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Your Portfolio Website
```

4. Save the template and copy the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" in your dashboard
2. Copy your **Public Key**

## Step 5: Update Environment Variables
Replace the values in your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxx
```

## Step 6: Restart Development Server
```bash
npm run dev
```

## Testing
1. Fill out your contact form
2. Check your email inbox
3. You should receive emails from your portfolio!

## Alternative Options

### Option 2: Node.js Backend with Nodemailer
If you want a backend solution:

1. Create Express.js server
2. Use Nodemailer to send emails
3. Deploy to Vercel/Netlify

### Option 3: Formspree (No setup required)
1. Go to [Formspree.io](https://formspree.io/)
2. Get a form endpoint
3. Just change form action to their endpoint

### Option 4: Netlify Forms (If deploying to Netlify)
1. Add `netlify` attribute to form
2. Netlify handles the rest automatically

The EmailJS solution is the best for your current setup as it requires no backend and works with any hosting provider!
