---
layout: post
date: 2020-11-08
---

# About iSH’s pending removal from the App Store

<p>
<div class="bubble">
<strong><span style="color: #32a852">Update</span></strong>: We got a call this evening from someone who runs App Review. They apologized for the experience we had, then told us they've accepted our appeal and won't be removing iSH from the store tomorrow. We'll stay in contact with them to work out details. Thanks everyone for your support!
<br><br>
If you're a scripting app that has had issues with section 2.5.2 in the past, feel free to reach out. We'd love to include your experience in our discussions with Apple.
</div>
</p>

On Monday, October 26th, just four days after we launched iSH on the App Store, we received a call from Apple informing us that they had found our app noncompliant with section 2.5.2 of the App Store Review Guidelines and that they would remove the app from sale if we did not submit a satisfactory update within two weeks. Despite our best efforts, we do not believe we will be able to bring iSH into compliance by tomorrow, the conclusion of this 14 day period, and we expect iSH to no longer be available to download from the App Store after that time. We are working our hardest to get iSH back on the App Store as soon as possible and hope for your understanding and support as we navigate our next steps in this process.

Thanks for using iSH!  
Theodore Dubois, Saagar Jha & Martin Persson

## Why is iSH being removed?
Apple believes iSH is not compliant with section 2.5.2 of the App Store Review Guidelines, which governs applications which download and run executable code. Specifically, they believe that iSH “is not self-contained and has remote package updating functionality”, and suggest that we should “remove the remote network activity functionality which could allow for remote code importing into the app, such as wget or curl, or other remote network commands”. Additional communication with Apple has indicated that they believe that iSH is a security concern if we allow any sort of code importing by the user.

**We believe iSH is fully compliant with the App Store Review Guidelines.** [Saagar has written](https://saagarjha.com/blog/2020/11/08/fixing-section-2-5-2/) a more detailed analysis of why we believe this rejection is incorrect, how we believe Apple has misinterpreted and misapplied this rule to our app, and describe how 2.5.2’s poor wording coupled with the review team being unable to review functionality of scripting applications leads to mistaken classifications like these. At a high level, Apple has selectively targeted iSH using section 2.5.2 without fullying understanding our application, their own guidelines, or the consequences of what they are asking and how they affect the App Store ecosystem as a whole. **Consistent enforcement of Apple’s incorrect interpretation would require the removal of all scripting apps, including many of the most popular applications in the App Store and some of Apple’s own applications.**

## What have we done to get iSH back on the App Store?
We've been working for the last two weeks to try to keep iSH available without interruptions. We have drafted numerous appeals, requests for clarifications, rule modifications, and explanatory emails. We’ve been on the phone with Apple for hours. Unfortunately, even with this we have been unable to resolve the issue, and the process has been significantly more stressful than we would have liked it to be. Theodore, the primary iSH liaison to Apple, [has written about](https://tbodt.com/2020/11/08/app-review-experiences.html) how this process should be improved.

Our first interaction with the App Store review team actually dates back to May, not October: we wanted to know what Apple thought of iSH, since we weren’t sure how the rules would be enforced for it. Of course, iSH complies with the letter of the guidelines, but review found it to violate 2.5.2 because it could download Linux executable code. The problem appeared that apk lets you install packages, so we decided to remove it and work on other features to make the app more useful in its absence. We submitted this updated build in October and this was what is currently on the App Store.

After our build was flagged for noncompliance, we went through the usual review process: we first asked for clarification, and then after we realized that the rule was being misapplied we submitted a rule change request and of course appealed the decision as well. As the deadline approached we sent off an email to Phil Schiller as well detailing our situation. Unfortunately none of this led anywhere, which brings up to our current situation today.

## Does this mean I can’t use iSH anymore?
No, not at all. However, it will mean that you will no longer be able to get iSH from the App Store, which is something which we would still like to be able to provide. The App Store remains the easiest and most popular method of software distribution on iOS, and we’re working hard to save iSH’s listing because we think the app should have a permanent spot there for users who prefer this method of distribution.

Removal of iSH’s listing on the App Store should not affect your use of iSH if you download the app before it is removed. We have not received any compliance messages from Apple regarding [our TestFlight beta](https://testflight.apple.com/join/97i7KM8O), so we plan to continue offering prerelease versions of iSH there for up to 10,000 beta testers.

Precompiled builds of iSH (distributed as IPA files) will [remain available on GitHub](https://github.com/ish-app/ish/releases) for [installation through AltStore](https://ish.app/altstore) and for jailbroken users. Advanced users are welcome to [build iSH](https://github.com/ish-app/ish#build-for-ios) themselves—it’s free and open source and always will be!

<div class="bubble"><strong><span style="color: #32a852">Update</span>: <a href="https://twitter.com/a_Shell_iOS/status/1325526061099196416">a-Shell has mentioned</a> that they have received a similar rejection notice. Apple may be running extra review for scripting apps.</strong></div>
