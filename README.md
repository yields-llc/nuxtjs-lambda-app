# nuxtjs-lambda-app
This is a sample project with `Nuxt.js` + `AWS Lambda`.

## Run locally
First, install the dependent packages.

```bash
$ yarn
yarn install v1.22.21
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...

...

[4/4] 🔨  Building fresh packages...
$ nuxt prepare
✔ Types generated in .nuxt                                                                                                                                                                                                            5:42:44 PM
✨  Done in 4.20s.
```

All you have to do is launch the application.

```bash
$ yarn dev
yarn run v1.22.21
$ nuxt dev
Nuxt 3.12.2 with Nitro 2.9.7                                                                                                                                                                                                           5:43:37 PM
                                                                                                                                                                                                                                       5:43:37 PM
  ➜ Local:    http://localhost:3000/
  ➜ Network:  use --host to expose

  ➜ DevTools: press Shift + Option + D in the browser (v1.3.7)                                                                                                                                                                         5:43:38 PM

ℹ Vite server warmed up in 560ms                                                                                                                                                                                                      5:43:39 PM
✔ Nuxt Nitro server built in 543 ms                                                                                                                                                                                             nitro 5:43:39 PM
ℹ Vite client warmed up in 963ms                                                                                                                                                                                                      5:43:39 PM
```

## Deploy to AWS
Install `AWS SAM CLI` in advance by referring to the following link.

- [Installing the AWS SAM CLI - AWS Serverless Application Model](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)

The first time you deploy, `sam deploy` with the `-guided` option.

```bash
$ sam deploy --guided --profile=${AWS_PROFILE}
```

You will then be asked a few questions, which I will answer as follows.

```bash
Configuring SAM deploy
======================

        Looking for config file [samconfig.toml] :  Found
        Reading default arguments  :  Success

        Setting default arguments for 'sam deploy'
        =========================================
        Stack Name [nuxtjs-lambda-app]: 
        AWS Region [{AWS_REGION}]: 
        Parameter StackFamily [nuxtjs-lambda-app]: 
        #Shows you resources changes to be deployed and require a 'Y' to initiate deploy
        Confirm changes before deploy [Y/n]: 
        #SAM needs permission to be able to create roles to connect to the resources in your template
        Allow SAM CLI IAM role creation [Y/n]: 
        #Preserves the state of previously provisioned resources when an operation fails
        Disable rollback [y/N]: 
        NuxtFunction Function Url may not have authorization defined, Is this okay? [y/N]: y
        Save arguments to configuration file [Y/n]: 
        SAM configuration file [samconfig.toml]: 
        SAM configuration environment [default]: 
```

After the build and deployment preparations are successfully completed, you will be asked to start deployment as shown below.

```bash
Previewing CloudFormation changeset before deployment
======================================================
Deploy this changeset? [y/N]: 
```

Enter `y` to start deployment.

Then, when deployment is complete, the Lambda URL will be output as shown below, which can be accessed.

```bash
CloudFormation outputs from deployed stack
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Outputs                                                                                                                                                                                                                                        
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Key                 NuxtFunctionUrl                                                                                                                                                                                                            
Description         -                                                                                                                                                                                                                          
Value               https://{LAMBDA_URL_ID}.lambda-url.{AWS_REGION}.on.aws/                                                                                                                                                 

Key                 NuxtFunction                                                                                                                                                                                                               
Description         -                                                                                                                                                                                                                          
Value               arn:aws:lambda:{AWS_REGION}:{AWS_ACCOUNT_ID}:function:nuxtjs-lambda-app-NuxtFunction-{FUNCTION_ID}                                                                                                                            
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Successfully created/updated stack - nuxtjs-lambda-app in {AWS_REGION}
```

The top page should appear as shown below.

![Nuxt.js](./doc/Welcome-to-Nuxt.png)
