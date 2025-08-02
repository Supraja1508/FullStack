 ARM vs x86 Architecture – Pros & Cons

Feature           ARM (Phones/Tablets/Modern Laptops)                      x86 (Desktops/Old Laptops/Servers)        
Power Usage         Uses less battery (very efficient)                     Uses more power (less battery friendly)  
Performance         Fast enough for normal apps & tasks                    Super powerful for heavy apps like games 
Cost                Cheaper to make                                        More expensive chips                     
Compatibility       Limited software support (some older apps don’t work)  Works with all old and new software      
Heat                Less heat, stays cool                                  Produces more heat                       
Used In             Phones, iPads, Apple M1/M2 MacBooks                    Laptops, PCs, Gaming setups              



Operating System Concepts:
A. File System Indexing
What is it?
It’s like a table of contents for your files. It helps your computer quickly find where files are stored.

 Example:
When you save a file, your OS remembers:
File name: myphoto.jpg
Where it’s stored: Folder A, Block 123
File size, date, permissions
It makes searching faster!

B. Memory Management
 What is it?
The OS shares RAM with apps. When RAM is full, it moves less-used data to disk (this is called swapping).

Real Example:
If you open too many apps at once, your system may become slow — because the OS is busy swapping memory between RAM and storage.
It keeps apps from crashing due to low memory.

C. Process Scheduling
 What is it?
It decides which app runs first, next, and how long. It uses rules called scheduling algorithms.

Types:
FCFS (First Come First Serve) – Runs apps in the order they opened
Round Robin – Gives every app equal turn
Priority Scheduling – Important apps run first
It helps with smooth multitasking!


 Frontend JS Method to Find OS and Device Details
In websites, we can’t access deep system info. But we can use navigator to find basic OS and device type.

Useful Properties:
Code	What It Does
navigator.platform	Gives OS info like Win32, MacIntel, Linux
navigator.userAgent	Full browser+OS string (e.g., Windows 10 Chrome)

