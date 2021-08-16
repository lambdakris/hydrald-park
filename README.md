# Intro

The Alcaeus Angular Sandbox contains experiments in how to develop a hypermedia driven application according to the HYDRA standard with the use of Alcaeus and Angular.

The Alcaeus Angular Sandbox consists of an Angular app with the following top level structure:

![Top Level App Structure](https://sharedassetsapp-prod.s3.us-east-2.amazonaws.com/public/snapshot-98f2e9b6-4374-42ab-8544-cdad0a72ab44.svg)

At the top level, the App is divided into a Wikibus module and a Cookbook module, each of which is divided into a Basic module and a Framework module. The Wikibus module is intended to contain code for adapting the [Hydra Wikibus example](https://github.com/wikibus/www.wikibus.org) while the Cookbook module is intended to contain code for adapting the [Hydra Cookbook examples](https://github.com/HydraCG/cookbook). In turn, the Basic is intended for containing code using basic Alcaeus and Angular coding patterns while the Framework module is intended for containing code looking at performing more advanced component routing, component composition, component rendering, and server communication patterns with custom constructs built on top of Alcaeus and Angular.