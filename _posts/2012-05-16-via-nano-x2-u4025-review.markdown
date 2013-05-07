---
date: '2012-05-16 08:57:15'
layout: post
slug: via-nano-x2-u4025-review
status: publish
title: VIA Nano X2 U4025 Review
wordpress_id: '282'
categories:
- HTPC
---

[![Three Zotac ZBOXs standing on ends](http://knurdtech.com/wp-content/uploads/2012/05/HTPCs_portend.jpg)](http://knurdtech.com/wp-content/uploads/2012/05/HTPCs_portend.jpg)The ZBOX nano VD01 is the most difficult system to review.  Inside the only mini PC we tested from Zotac is a VIA Nano X2 U4025 processor with VX900 / Chrome9 graphics (pictured on right).

On paper it looks very promising with CPU specs that should outperform the Intel Atom D2700.  However, we're more concerned with the graphics support and performance.



## Testing setup


For this system we used a 256GB SSD with Windows 7 Home Premium and a 2GB 1066MHz DDR3 SO-DIMM module.

An Ubuntu installation was attempted but did not perform well.  VIA's graphics support for Linux is horrendous and doesn't appear to be improving.  Linux was tested with an Ubuntu graphics driver from Zotac's website dated 4-Jan-2012.



## Technology


The dual core Nano X2 should be on-par with or slightly ahead of the dual core Atom with proper software support.  As we covered in our previous HTPC system reviews ([AMD](/amd-e-450-review-linux-htpc/) and [Intel](/intel-atom-d2700-htpc-review/)), graphics and hardware acceleration are the true requirements to complement a low-end CPU for HD video playback.

[![Inside the ZBOX nano VD01](http://knurdtech.com/wp-content/uploads/2012/05/Internal_Via-300x255.jpg)](http://knurdtech.com/wp-content/uploads/2012/05/Internal_Via.jpg)


## Graphics and Hardware Acceleration


Theoretically the VX900 should provide 1080p video playback through hardware acceleration.  VIA claims support for H.264, MPEG-4, MPEG-2, VC-1, and Blu-ray to name a few.

In my testing, [VLC media player](http://www.videolan.org/vlc) did not perform well with a 1080p MKV nor did Windows Media Player with the DivX Plus Codec Pack.  However, XBMC for Windows played the same video file almost skip-free before either of those previous players were tested.  



## Other Shortfalls


Unlike the other systems tested, I was only able to get two USB ports working on a bare system which makes installing and running an OS from USB nearly impossible.  However, after installing Windows to an internal hard drive it is possible to load drivers for the two rear USB 3.0 ports and front facing card reader.

Which brings us to another shortfall...


### Driver Hell


Windows required numerous drivers from the Zotac website.  At the time of writing this, the Zbox VD01 drivers can be found at [http://www.zotacusa.com/downloads?cat=284#downloadscontent](http://www.zotacusa.com/downloads?cat=284#downloadscontent).  I started with the Windows 7 64-bit graphics drivers to support the proper screen resolution.  Almost all other drivers were installed with the exception of the BIOS update which kept failing.



### Power Consumption


Looking over the spec sheet I was expecting this box to put up very low power consumption numbers.  Yet it was pulling TDP figures anywhere from 18 all the way to 35 watts on occasion.  XBMC idled around 25 watts and Cinebench ran at 29-30 watts.



## Conclusion


The Zotac ZBOX VD01 runs too hot and uses too much power to be worth all the effort involved.  Initial research showed this might run cooler than the [AMD E-450](/amd-e-450-review-linux-htpc/).  However, the AMD wins in every category except price.  Some could argue it wins in that category as well...considering what you get with the Nano X2.

It is the cheapest and smallest box out of the three Zotac's just covered.  That might make it worthwhile to someone out there.  Expect many roadblocks while getting the VD01 working.  It may even reward you with HD video in the end.
