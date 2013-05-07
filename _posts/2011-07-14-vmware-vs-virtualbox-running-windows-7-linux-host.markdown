---
date: '2011-07-14 11:08:09'
layout: post
slug: vmware-vs-virtualbox-running-windows-7-linux-host
status: publish
title: VMware vs VirtualBox - Running Windows 7 on Linux host
wordpress_id: '95'
categories:
- Linux
---

**VMware Player 3.1.4 and Oracle VM VirtualBox 4.0.10 - An initial review of two free virtual machines.**

A virtual machine allows basically any guest OS to run within a host OS.  In this case running Windows 7 (guest OS) inside Ubuntu 10.04 (host OS).  It can also be useful for testing various distributions of Linux.  The goal is to find the best virtual machine for Linux.

As a quick background, I currently bounce between two computers: a desktop with Ubuntu 10.04 and a laptop with ArchBang.  On occasion I can not avoid requiring Windows.  Which leaves three options: setting up a dual-boot, running a virtual machine, or using a compatibility layer such as [Wine](http://www.winehq.org/).  The third being the only completely _gratis_ (free as in beer) and _libre_ option (free software and no Windows license required).

**Advantages and Reasons for running a virtual machine**

No dual-boot!  Dual-booting is my least favorite option which I only resort to when sharing a computer with someone that insists on having a full-fledged Windows install.  A dual-boot setup requires meticulous partitioning of the hard drive and implementing a boot menu.  On the other hand, when using a compatibility layer or virtual machine in Linux there is no reason to shutdown all applications and the computer just to run something in another OS.  I don't run Windows long enough or often enough to want to deal with rebooting.

[Sandboxing](http://en.wikipedia.org/wiki/Sandbox_%28computer_security%29)!  A virtual machine only accesses host resources through the emulator.  Basically the guest OS is isolated from the host OS providing additional security.

Full OS!  OK, this can be argued as an advantage or disadvantage therefore I'm calling it a reason for using a virtual machine.  If you occasionally need another OS and a compatibility layer fails then this is an advantage.

**Disadvantages (a.k.a. arguments for Wine)**



	
  * Must have full copy of guest OS (in this case Windows 7)

	
  * Uses more memory and disk space

	
  * Drags down performance (by claiming some memory)



**Test system**

Ubuntu 10.04 "Lucid Lynx", integrated ATI Radeon™ HD 4200, AMD Sempron 140 with [AMD-V](http://en.wikipedia.org/wiki/X86_virtualization#AMD_virtualization_.28AMD-V.29), and 4 GB RAM.  Even though this Sempron has an extra core unlocked, only one core/thread was assigned to each virtual machine.  More details about test system [here](http://knurdtech.com/cheap-desktop-upgrade/).

**VMware Player 3.1.4**

VMware has many products at different price points.  This refers to the _gratis_ VMware Player (specifically VMware-Player-3.1.4-385536.i386.bundle).  The virtual machine was configured with 1024 MB RAM for Windows 7.  After Windows installation completed I installed the VMware Tools.  According to VMware's website, "installing VMware Tools eliminates or improves the following issues:



	
  * low video resolution

	
  * inadequate color depth

	
  * incorrect display of network speed

	
  * restricted movement of the mouse

	
  * inability to copy and paste and drag-and-drop files

	
  * missing sound"



Initially the display flickered and did not work correctly but the issue was solved by turning off 3D graphics acceleration in the VMware machine settings.  Other things confirmed working were USB and sound.  Knurd Sidebar: I actually used this setup to mount an Android phone and use Windows only software to install new bootloaders and a new kernel.

Passmark ratings

	
  * Overall PassMark rating: 558.9

	
  * CPU Mark: 714.9

	
  * 2D Graphics Mark: 372.5

	
  * Memory Mark: 418.1

	
  * Disk Mark: 1432.8



**Oracle VM VirtualBox 4.0.10**

Reviews on the web mostly show version 3.2 or older.  Starting with version 4.0, VirtualBox is split into components.  The base package consists of all open-source components then extension packs add functionality to the base package.  Currently there is only one extension pack which adds support for USB 2.0 devices, RDP, and PXE boot for Intel cards.

The Guest Additions offer the following features:



	
  * Mouse pointer integration

	
  * Shared folders

	
  * Better video support

	
  * Seamless windows

	
  * Generic host/guest communication channels

	
  * Time synchronization

	
  * Shared clipboard

	
  * Automated logons (credentials passing)



For some reason this VirtualBox seems smoother.  At first I planned to leave that as a subjective opinion then decided to run PerformanceTest 7.0 from PassMark.  Both virtual machines were assigned the same memory (1024 MB) but VirtualBox was assigned half the disk space of VMware (20 GB versus 40 GB).  Otherwise, I attempted to match all settings.  

As you can see from the results, VMware comes out ahead in everything other than 2D graphics.  Not sure what to make of the large disk discrepancy except to note that VirtualBox did complain about being on an ext4 file system.  The key factor on _my crippled hardware_ appears to be the better 2D graphics score in VirtualBox.

Knurd sidebar: If you receive an error that your user is not part of the vboxusers group, the command (as root) is `gpasswd -a _youruser_ vboxusers` to add your user to the group.

Passmark ratings



	
  * Overall PassMark rating: 582.2

	
  * CPU Mark: 682.1

	
  * 2D Graphics Mark: 438.5

	
  * Memory Mark: 404.6

	
  * Disk Mark: 801.3



**Conclusion**

This is far from a complete test.  First off, USB still needs testing in VirtualBox at which time I will update this post or append a new one.  Beyond that (and in my opinion) VirtualBox runs better on this hardware.  I also prefer the UI and the interactions between host and guest OS in VirtualBox.  Your mileage may vary -- However, if you only have time to install one then my recommendation at this time stands with VirtualBox 4.0.10.
