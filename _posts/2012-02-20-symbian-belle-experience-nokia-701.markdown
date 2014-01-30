---
date: '2012-02-20 22:47:46'
layout: post
slug: symbian-belle-experience-nokia-701
status: publish
title: Symbian Belle experience on Nokia 701
wordpress_id: '224'
categories:
- Phones
---

### Importing Contacts from Android:

Nokia only provides directions to copy contacts over from another Nokia phone. However, importing contacts by other methods is quite easy. Here we are using a generic .vcf import that works well coming from an Android device.

#### Liberating your contacts from Google

First, make sure your Android contacts are synced with your phone's Google account. Most people leave sync enabled but you may check by going to...

Then sign into your Google account from a computer (signing into Gmail will accomplish this). Now paste the following in your address bar: https://www.google.com/takeout/#custom:contacts. (If you want to find it the long way, drop down from your email and select account settings. In account settings, select "data liberation", then "download your data", followed by "choose services." For our purposes, all we need are contacts.)

The file downloads as a compressed .zip file. Use your preferred extraction tool (download 7-zip if you need one) to extract all .vcf files with contact data. In my case this was only one file "My Contacts.vcf".

#### Importing contacts to Nokia Belle

Now mount your Symbian phone to the computer in "Mass storage" mode and copy your .vcf contact file(s) to E: Mass memory -> Other -> Contacts. Note: I did try putting this file in other places and it was not recognized.

Almost done. Simply open Contacts, tap the options menu in lower right -> Copy contact card -> From other memory. That's it! Your Nokia phone should have all your contacts now.

### Nokia message indicator won't stop blinking

The manual is pretty worthless here as it only states "if the message indicator is blinking, your Inbox folder may be full."

A quick search reveals the cause to lie in messages stored on your SIM card (left over from your old phone). A relatively simple fix although a little hidden in the menus. Open messaging -> options -> View folders -> options -> SIM messages. Now delete all those messages and your indicator should stop flashing.

### Using contacts on Belle

So refreshing. Select a contact and Belle presents all contact methods for that person.

Use certain contacts frequently? Assign those people as favorites and they always appear at the top of the contact list. You can also assign contacts as shortcuts or to a contact widget on one of your home screens.

In a follow up post, I will add social network integration and evaluate configuration options. Of course I will test out the VOIP / SIP integration as well. Nokia usually shines in that area.

UPDATE 7/20/12: After using Nokia Belle for a few months, I can no longer recommend it. When it works it is fine but all too often it either freezes or behaves incorrectly. Unfortunately this leaves me with no favorite mobile OS. I'm also not a fan of Android, iOS, or Windows Phone 7 in their current states (although I can at least live with Android).

My hope is that Blackberry 10, currently slated for a 2013 release, or Windows Phone 8 will make major strides **OR** that Jolla (a company consisting of former Nokia employees) beats the odds and does something amazing with the MeeGo platform.
