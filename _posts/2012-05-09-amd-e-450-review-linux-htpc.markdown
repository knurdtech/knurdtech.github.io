---
date: '2012-05-09 11:09:04'
layout: post
slug: amd-e-450-review-linux-htpc
status: publish
title: AMD E-450 Review - Linux HTPC
wordpress_id: '250'
categories:
- HTPC
---

[![Zotac Zbox ID80 and AD04 side-by-side](http://knurdtech.com/wp-content/uploads/2012/05/Intel_vs_AMD-300x226.jpg)](http://knurdtech.com/wp-content/uploads/2012/05/Intel_vs_AMD.jpg)Inside the ZBOX-AD04-U is an AMD E-450 APU with onboard Radeon HD 6320 graphics.  We plan to compare it with Intel's finest Atom processor (with Nvidia graphics) and see which wins as a media center computer.

To read more about the Zotac ZBOX in general see the post analyzing the Intel board [here](http://knurdtech.com/intel-atom-d2700-htpc-review/).  This post will look at the AMD technology and benchmarks against the previously reviewed ID80.

We will also be featuring articles detailing the full setup of a Linux home theater PC (HTPC) and the benefits of a small computer attached to your television.



## ZOTAC ZBOX Setup


Once again we installed a 120GB SSD and 2GB 1066MHz DDR3 SO-DIMM for benchmarking purposes.

You can usually secure a 2GB memory module for under $15 at [http://www.amazon.com/](http://www.amazon.com/) (just search for "so-dimm ddr3").  This motherboard supports 1333MHz (PC3-10600) memory so make sure the memory you select is at least that fast.  A hard drive is not necessary which we will address in an upcoming post.  For this reason we do not suggest upgrading to the "PLUS" versions of any ZBOX.  However, if you do wish to install a hard drive make sure it is 2.5-inch (most SSDs and laptop drives are this size).

**Notice** we used slower 1066MHz memory for these benchmarks.  Any benchmarks able to take advantage of faster 1333MHz data rate memory may score higher.



## Technology



AMD E-450 is a low power APU (accelerated processing unit) that combines a CPU and GPU on the same die.  However, while Intel fails to deliver good integrated graphics with any of their low-power Atom-based CPUs, AMD's integrated graphics are worthy of high definition video.  The APU is rated at 18 watt TDP and since we do not have to add discrete graphics the overall system power consumption stays fairly close to that figure.

Overall system power varied from 17 watts while idle in Ubuntu 12.04 up to 28 watts while encoding videos.  The E-450 was only drawing 21-22 watts during the gaming benchmarks.  Across the board power was significantly down from the Atom/Nvidia combination.  Power figures are observed using a P3 "kill a watt" meter.



### Graphics Background and Hardware Acceleration



Graphics in the E-450 are handled by the integrated Radeon HD 6320.  Unlike the Radeon HD 6310 in the AMD E-350 APU, the HD 6320 supports higher bandwidth DDR3-1333 memory and turbo mode (graphics clock rate will speed up when requested).

Both the Radeon HD 6310 and 6320 support UVD 3.0.  UVD (Unified Video Decoder) is the video decoding engine AMD/ATI uses to support hardware decoding of H.264 and VC-1 high definition video codecs.  In Linux this is accomplished through the XvBA API with the use of the AMD linux driver (fglrx).  If all that went over your head, don't worry...there are versions of XBMC that are nice enough to take care of it for us.

You will notice two benchmarks of this AMD platform on the next page.  Ubuntu 12.04 does not install the AMD linux driver by default and instead relies on an open source video driver (referred to as "radeon").  We decided to do the benchmarks on a base Ubuntu install followed by benchmarks with the AMD "fglrx" driver.  Again, this is only important if you install a version of Linux without AMD drivers out of the box.



## Additional Features




  * High-Definition analog stereo


  * Optical Digital S/PDIF output


  * HDMI and DisplayPort video ports


  * HDMI-to-DVI adapter


  * 802.11n/g/b wireless (WiFi)


  * Gigabit ethernet (hardwired internet connection)


  * 2 x USB 3.0 and 4 x USB 2.0 ports


  * SD/SDHC/MMC/MS/MS Pro/xD Card Reader


  * Media Remote


Benchmarks and conclusions on next page



## Benchmarks



In addition to the Nvidia ION and Zbox ID80 from last time, we now have the AMD E-450 with open source drivers and AMD linux drivers.  Focus on the fglrx results as the radeon results are just here for reference.



### System Configuration


The AMD E-450 is using the same type and speed of RAM as the Intel Atom D2700.  This is unfortunate as the E-450 actually supports higher clocked RAM as mentioned earlier.



### Encoding Tests


First up are video and audio encoding tests.





AMD actually wins in three out of five encoding tests.  Not bad considering it uses much less power while running the tests.



### Gaming Benchmarks


HTPCs are not built for gaming but these tests give us an idea of GPU performance.  OpenArena uses the ioquake3 game engine while Xonotic uses a heavily modified version of the Quake engine called "DarkPlaces."


#### OpenArena






AMD falls short in OpenArena against the Atom D2700 but at least does marginally better than the older Atom 330 / Nvidia 9400M combo in most cases.



#### Xonotic






The E-450 fairs much better in Xonotic and even bests the D2700 in some scenarios.



### XvBA


X-Video Bitstream Acceleration is the interface AMD uses for hardware acceleration with Radeon and Fusion graphics processors.  Unfortunately, the Phoronix Test Suite we're using does not have a benchmark for this.  Therefore, we don't have any results similar to the VDPAU video viewing tests that were run with the Nvidia graphics.



## Conclusions


The ZBOX AD04 has the looks and all the right features for the living room.  It remains quiet and uses very little power.  Hardware acceleration still isn't perfect in the AMD / Linux world but it has come a long way and gets my recommendation.  If you plan to use Windows for your HTPC it _should_ have even better hardware acceleration support out of the box.



## Advantages






  * Quiet and Efficient


  * Small


  * Great graphics for Media center


  * Media Remote Control with IR extender


  * Plenty of ports (USB 2.0/3.0, 6-in-1 Card Reader, HDMI, DisplayPort)


  * Easy opening for addition of Hard Drive and RAM





## Disadvantages






  * Minor configuration required


