---
layout: post
title: An Update on the iSH Default Repositories
created: 2021-04-26
author: Saagar Jha
---

Today, we are pleased to announce version 1.2 of iSH! With major changes under the hood to how iSH fetches packages, interacting with APK should now be significantly more ergonomic and reliable. If you haven’t tried the update already, you can download the latest version from the [App Store](https://apps.apple.com/us/app/ish-shell/id1436902243); if you’re interested in the changes we’ve made, read on below.

## An ODR Retrospective
Some of our early users may recall that the first version of iSH on the App Store didn’t ship with APK at all–as we continued to clarify the app’s compliance with the App Store Review Guidelines, we decided against providing any package management functionality by default for reasons of expediency. Once we [got a handle on the situation](https://ish.app/blog/app-store-removal), however, it was clear that providing an easy way to allow our users to access the wealth of software that Linux has to offer was of utmost importance. But how could we do it without running afoul of the review guidelines?

For iSH 1.1, we devised a clever solution: we would use Apple’s [on-demand resources](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/On_Demand_Resources_Guide/) (ODR) API to host the entirety of the Alpine Linux software repositories. Implementing this required no small amount of technical skill–we [talked a little bit](https://twitter.com/iSH_app/status/1336770264885948416) about some of the details back when we released the feature. We think that iSH was probably one of the largest users of ODRs on the entire App Store, if not the largest.

While ODRs ostensibly provided a solution for our package distribution woes, we quickly ran into difficulties running it at our scale. Pushing out a new build of iSH–which we do almost daily–was a process that took over six hours, most of which was consumed by App Store ingestion as it processed our multi-gigabyte app bundle. Our ODR build scripts bypassed Xcode entirely–it just couldn’t keep up with several thousand assets. In our app, we wrote an entire filesystem to bridge the ODR API to something that APK could consume.

As challenging as these problems were to face, they were ultimately ones we could design solutions for. But one final issue remained: ODRs are downloaded directly from Apple’s servers, in a process that is almost entirely opaque to the app or its developers. Almost immediately after shipping version 1.1, we started getting issues of a mysterious “I/O Error” from APK when users tried to download packages. As the reports of broken installs piled up, we scrambled to add additional logging for this error.

The extra information we got didn’t tell us much, but it was enough to make it clear that the issue was on Apple’s side. Perhaps it was just our scale, or a latent bug in the App Store CDN’s consistency code, but regardless of the underlying cause the servers would intermittently claim that the ODR assets we were requesting didn’t exist or were expired. Unfortunately, with bugs like this the only thing we could do was to file feedback and wait, which we did. (FB #8993897, DTS support #759099934) In the meantime, we looked for alternatives, and we’re shipping one today in iSH 1.2.

## The iSH infrastructure
In version 1.2 of iSH, we’ve removed ODR support in favor of a much simpler solution: a package mirror that we maintain at apk.ish.app. By default, each version of iSH ships with a repository list pointed at a pinned set of packages for the day the build was created; this is identical to how updates worked under ODRs. However, by controlling the package distribution mechanism we can ensure availability, as well as dispense with our glue code to marry ODR downloads with APK.

{% include aside.html type="Fun fact" content="We initially chose to host our packages on [Backblaze](https://www.backblaze.com/b2/cloud-storage.html) but quickly realized that it places limitations on filenames, but more importantly, doesn’t provide a plain HTTP endpoint–an important caveat considering that iSH needs to run TLS code in emulation! Instead, we’ve settled on [Wasabi](https://wasabi.com/), which is priced similarly, but allows non-HTTPS connections. As APK does integrity verification by hashing downloads, this allows for a significant speedup when installing packages." %}

Overall, we hope that you get the same great APK experience you know and love, without the ODR errors you don’t. Try out iSH 1.2 and let us know what you think!
