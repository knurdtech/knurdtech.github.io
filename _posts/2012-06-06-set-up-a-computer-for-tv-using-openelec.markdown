---
date: '2012-06-06 13:27:25'
layout: post
slug: set-up-a-computer-for-tv-using-openelec
status: publish
title: Set up a computer for TV using OpenELEC
categories:
- HTPC
---

We previously reviewed a few options for an HTPC. So what is an HTPC? It stands for home theater personal computer and can have different requirements based on your needs. Some may also refer to it as a TV computer or a media center PC. 

Regardless what you call it, the most basic requirement is for watching videos from a computer on a television (typically in high definition nowadays).

[OpenELEC](http://openelec.tv/) is a lightweight and easy to use XBMC media center distribution.  It takes the complications of a full operating system out of the picture and provides a nice interface for your media collection.  

In addition, by only loading what is necessary, OpenELEC boots fast and does not use much memory.  We installed it to a 512 MB USB flash drive.  All our media is stored on a NAS (network attached storage) device or streamed from the internet hence the preference for a small USB stick.

Here is a quick video showing the full installation of OpenELEC.  Two USB drives are used.  Once the latest version of OpenELEC is [downloaded](http://openelec.tv/get-openelec) for your hardware, follow their [instructions](http://wiki.openelec.tv/index.php?title=Installation) to write it to a temporary flash drive.  We performed this step ahead of the video.  



During installation you will choose what media to install OpenELEC on (a hard drive or another flash drive).  Once installation is complete you can reformat and re-purpose the temporary flash drive as it should not be needed again.  As stated in the video, any cheap flash drive will work for the temporary installation files but you are better off using a decent flash drive (or hard drive) for final installation.

We now have an almost working HTPC.  The only thing that needs tweaking are the sound settings.  The following video shows how to enable sound on the [ZBOX ID80]({% post_url 2012-05-07-intel-atom-d2700-htpc-review %}).  Using another computer on the same network, map to your HTPC ("\\\\ipaddress\\configfiles" where ipaddress is the IP address of your OpenELEC which can be found on the System info → Summary screen in XBMC).  Copy the sound settings from [http://wiki.openelec.tv/index.php?title=Config_sound_zotac_id80](http://wiki.openelec.tv/index.php?title=Config_sound_zotac_id80) to a new file called asound.conf in the configfiles directory.



Now you just need media!  If you already have files on another computer just map to that directory from the XBMC media section.  Otherwise, try adding a few XBMC plug-ins to access on-line media.
