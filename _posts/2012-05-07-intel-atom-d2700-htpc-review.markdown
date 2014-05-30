---
date: '2012-05-07 15:26:23'
layout: post
slug: intel-atom-d2700-htpc-review
status: publish
title: Intel Atom D2700 - HTPC Review
wordpress_id: '231'
categories:
- HTPC
---

[![ZBOX ID80 and remote](/images/2012/05/ZBox_wRemote_CleanBackground.jpg)](/images/2012/05/ZBox_wRemote_CleanBackground.jpg)The ZBOX-ID80-U sports an Intel Atom D2700 processor and onboard Nvidia GeForce GT 520M graphics in a small package.  Does the latest and greatest Intel Atom work well as a Home Theater PC "HTPC" or Media Center computer?

Let's take a look at the "ZBOX" package, the technology inside, and wrap-up with some benchmarks.

## ZOTAC ZBOX Lineup

The ZBOX typically comes in three size flavors. I'll refer to this size as a mini PC measuring (in inches) 7.4 x 7.4 x 1.73. It is small enough to fit just about anywhere and also supports attachment to VESA mounts. A VESA mount or Flat Display Mounting Interface is the standard used on monitors or TVs when mounting to a wall stand. So if you have available mounting holes (i.e. your TV is not already hanging from a wall) then a ZBOX mini-PC can attach to your TV.

The other two sizes are the ZBOX nano and Blu-ray versions. The nano is the smallest in the lineup which carries the disadvantage of more heat build up. While the Blu-ray versions obviously support Blu-ray disks.  Personally, I rarely use DVDs or Blu-rays in my HTPC.  I prefer to backup disks using a more powerful computer and use the HTPC to play that file in the living room.

ZOTAC also sells two versions of each box.  A regular version with no hard drive or RAM and a "PLUS" version that includes both.  However, even the PLUS version arrives without an OS installed.  We received the base version and installed a 120GB SSD and 2GB DDR3 SO-DIMM for benchmarking purposes.  

You can buy a compatible 2GB memory module for under $15 at [http://www.amazon.com/](http://www.amazon.com/) (just search for "so-dimm ddr3").  This motherboard supports 1066MHz (PC3-8500) memory so make sure the memory you select is at least that fast.  A hard drive is not even necessary which we will address in an upcoming post.  For this reason we do not suggest upgrading to the "PLUS" versions of any ZBOX.  However, if you do wish to install a hard drive make sure it is 2.5-inch (most SSDs and laptop drives are this size).

## Technology

[![Inside the ZBOX ID80](/images/2012/05/ZBOX_ID80_Internal-266x300.jpg)](/images/2012/05/ZBOX_ID80_Internal.jpg)Intel's third-generation "Cedarview" Atom finally sheds the 45 nm fabrication for a more efficient 32 nm processor.  TDP for the D2700 and the Intel NM10 Express chipset are stated to be around 10 watts.  That includes built-in PowerVR SGX 545 graphics which are disabled on the ID80 in favor of a dedicated GeForce GT 520M with 512 MB memory.

Since the ID80 uses a dedicated graphics card, power consumption goes up.  The best estimate I could find on the graphics card was 12 watts.  However, during benchmarking the kill-a-watt meter registered as high as 45 watts total.  More common was 36 watts while in XBMC and even less while watching videos in 1080p High Definition.

### Graphics Background and Hardware Acceleration

Pairing Intel Atom with Nvidia graphics is still a huge graphics upgrade. Towards the end of 2013 this **may** no longer be the case as Intel plans to integrate Ivy Bridge graphics with the Intel Atom. Until then it is still best to avoid Intel graphics in the low-power HTPC field.

Intel's first generation Atom [nettop](http://en.wikipedia.org/wiki/Nettop) processors did not include an on-die GPU. However, if the motherboard uses the Intel 945GC/945GSE chipset then it has an integrated GMA 950 GPU. Nvidia then stepped in by creating the first ION platform to finally provide the Atom with respectable graphics (and 1080p playback) via the GeForce 9400M. Read more about it [here](/2009-htpc-components-and-specs/).

The second generation Atom added graphics onto the CPU with Intel's own GMA 3150 which is still not capable of 1080p playback and does not have VC-1 or AVC hardware acceleration built-in. Again, Nvidia released an ION platform (Next Generation ION or ION 2) but because of the chipset limitations it was also a step back in some ways. The Nvidia GeForce G210M is still a nice improvement over Intel's graphics but the available bandwidth to Nvidia went down. Since Intel switched over to a proprietary DMI connection, Nvidia has to provide dedicated graphics through a PCIe 1.1 lane (as opposed to directly integrating graphics with the first generation ION). However, 1080p playback was once again supported with very capable hardware acceleration.

Current generation Atom also has graphics built-in. This time Intel selected a PowerVR SGX 545 GPU (a.k.a. Intel GMA 3650) which you may recognize as a popular graphics solution in recent smart phones. Theoretically it should be an improvement as now hardware acceleration of VC-1 and AVC videos are supported. In practice this is not always the case. For Linux users this is still a loss as Imagination Technologies (makers of PowerVR) does not support the open-source community very well. Initial testing even shows the PowerVR is not supported well in Windows. 

Fortunately the Zotac ZBOX ID80 uses a GeForce GT 520M for graphic duties which proves more than capable.

## Additional Features

  * High-Definition analog stereo
  * Optical Digital S/PDIF output
  * HDMI and Dual-link DVI video ports
  * 802.11n/g/b wireless (WiFi)
  * Gigabit ethernet (hardwired internet connection)
  * 2 x USB 3.0 and 4 x USB 2.0 ports
  * SD/SDHC/MMC/MS/MS Pro/xD Card Reader

## Benchmarks

Let us compare this Intel Atom / Nvidia GPU configuration to the first generation Nvidia ION (dual-core Atom 330 with Nvidia 9400M GPU) which has been handling my HTPC workload for the past couple years.  The benchmark images are in SVG format.  If your browser can't see them, get a new browser!

### System Configuration

<embed src="/images/2012/05/systems.svg" type="image/svg+xml" /><br />

The only difference between the test configurations is the type of RAM since my old Atom uses DDR2 DIMMs and the new chipset uses DDR3 SO-DIMMs (laptop memory).

### Encoding Tests

First up are video and audio encoding tests.

<object data="/images/2012/05/1.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/2.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/3.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/4.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/5.svg" type="image/svg+xml"></object><br />

CPU performance has increased by a decent amount across the board.

### Gaming Benchmarks

Granted, HTPCs are not built for gaming but these tests give us an idea of GPU performance.  OpenArena uses the ioquake3 game engine while Xonotic uses a heavily modified version of the Quake engine called "DarkPlaces."

#### OpenArena

<object data="/images/2012/05/6.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/7.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/10.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/13.svg" type="image/svg+xml"></object><br />

The ZBOX finally fell below 30 fps in OpenArena after posting 30.03 fps at 1400 x 1050 resolution.

#### Xonotic

<object data="/images/2012/05/28.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/32.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/36.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/40.svg" type="image/svg+xml"></object><br />

Neither box was able to clear 30 fps in Xonotic at "Ultra" quality so these are the "High" results.  The GeForce GT 520M is definitely an improvement over the GeForce 9400M used in the Nvidia ION.

### VDPAU

And finally some tests for viewing videos.  VDPAU (Video Decode and Presentation API for Unix) is a library used to support decoding on the graphics card instead of relying on the CPU.  Using a GPU for decoding is always more efficient and absolutely required when viewing High Definition videos on a CPU this weak.  These are the most relevant to an HTPC using Nvidia graphics as the VDPAU library was designed by Nvidia.

<object data="/images/2012/05/vdpau1.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/vdpau2.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/vdpau3.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/vdpau4.svg" type="image/svg+xml"></object><br />
<object data="/images/2012/05/vdpau5.svg" type="image/svg+xml"></object><br />

The older Nvidia ION was not even capable of running the 1920x1080 MPEG4 decoding test.

## Conclusions

The ZBOX ID80 is a great looking box that serves well in the living room.  It stays plenty quiet although it does use a little more power than my old Nvidia ION.  Nevertheless, this system still uses much less energy than most desktops and makes a nice addition to any HDTV.

## Advantages

  * Quiet
  * Small
  * Powerful graphics for Media center
  * Media Remote Control with IR extender
  * Plenty of ports (USB 2.0/3.0, 6-in-1 Card Reader, HDMI, DVI
  * Easy opening for addition of Hard Drive and RAM

## Disadvantages

  * Not the most efficient HTPC
  * Gets a little too warm at times
