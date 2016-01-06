# Angular2: Tour of Heroes, in Electron

This app was created using the tutorial for Angular2 available on their [website](https://angular.io/docs/ts/latest/tutorial/toh-pt1.html). The app was then transposed in the Electron environment. The tooling for the development of this app is using VSCode as the IDE and many different options it covers.  
This README regroups all the developper tools used on this app in VSCode. It will NOT explain how to get the app running on your computer.

## Building and cleaning the builds

The task manager that we use with this application is [Gulp](http://gulpjs.com/). The main difference with Grunt is that Grunt focuses on configuration, while Gulp focuses on code.  
The way building the app is working right now is to call one or a set of _task_ that will provide a different variety of packages ready for distribution. The files used for development are not added to those packages, as I considered that it was unnecessary for the end users to have those files. It would be however easy to add a _development build_ that could be distributed to those who want to chip in the project.

To launch a gulp task, open the terminal, go to the root of the project and type
> gulp _`task`_  

Here is the exhaustive list of the tasks you can call to build the app:

* `build`: build for all platforms the zip package and the directory

 * `build-dir`: build for all platforms the directory
 
   * `build-dir-linux-x64`: build the directory for linux-x64
   * `build-dir-linux-ia32`: build the directory for linux-ia32
   * `build-dir-win32-x64`: build the directory for win32-x64
   * `build-dir-win32-ia32`: build the directory for win32-ia32
   * `build-dir-darwin`: build the directory for darwin
 * `build-zip`: build for all platforms the zip package
 
   * `build-zip-linux-x64`: build the zip package for linux-x64
   * `build-zip-linux-ia32`: build the zip package for linux-ia32
   * `build-zip-win32-x64`: build the zip package for win32-x64
   * `build-zip-win32-ia32`: build the zip package for win32-ia32
   * `build-zip-darwin`: build the zip package for darwin
   
 * `build-linux-x64`: build the zip package and the directory for linux-x64
 
 * `build-linux-ia32`: build the zip package and the directory for linux-ia32
 
 * `build-win32-x64`: build the zip package and the directory for win32-x64
 
 * `build-win32-ia32`: build the zip package and the directory for win32-ia32
 
 * `build-darwin`: build the zip package and the directory for darwin  
 
 
The out directory for all these tasks is the _build_ directory.  
All these tasks call for the cleaning of an existing package in order to avoid conflict between 2 different distributions. If you want to keep a track of a previous version, you should save it somewhere else: once the building of the newest version is done, it will not be possible to retrieve and older version.

There also exists tasks to perform the cleaning of one or a set of packages:

* `clean`: clean all the existing packages

 * `clean-dir`: clean all the existing directory packages
 
   * `clean-dir-linux-x64`: clean the existing linux-x64 directory package
   * `clean-dir-linux-ia32`: clean the existing linux-ia32 directory package
   * `clean-dir-win32-x64`: clean the existing win32-x64 directory package
   * `clean-dir-win32-ia32`: clean the existing win32-ia32 directory package
   * `clean-dir-darwin`: clean the existing darwin directory package 
 * `clean-zip`: clean all the existing zip packages
  
   * `clean-zip-linux-x64`: clean the existing linux-x64 zip package
   * `clean-zip-linux-ia32`: clean the existing linux-ia32 zip package
   * `clean-zip-win32-x64`: clean the existing win32-x64 zip package
   * `clean-zip-win32-ia32`: clean the existing win32-ia32 zip package
   * `clean-zip-darwin`: clean the existing darwin zip package
   
## Debugging

All of the debugging can be made inside VSCode using the tools provided by the IDE and .  
Make sure you installed the "Debugger for Chrome" extension. To do so, press `F1` in VSCode and type _extension_ in the bar that pops up. Select the "Show Installed Extensions" options. If "Debugger for Chrome" is not part of the list that shows up, select the "Install Extensions" options and look for "Debugger for Chrome". Install it and restart VSCode.  
When debugging, make sure that no instance of Chrome is running, otherwise thie next steps won't work.  
Once you're ready to debug, in a terminal at the root of the project, type
> `npm start`

This will launch the app, and the debug output will be redirected to port 9222. It will also recompile automatically the files that you modify.  
If it is the first time you use the debugger, in VSCode, go to the Debug menu by clicking on the icon or pressing `Ctrl+Shift+D`. Select the "Attach to VSCode" option in the dropdown at the top left corner of the window, and press `F5` to start debugging in VSCode.  
If it is not the first time you use the debugger, the "Attach to VSCode" option is already selected and you can just press `F5` anywhere in the IDE to start debugigng.  
A pane will appear on the left side of the window containing the "Debug Console". Set your breakpoints directly in the files that you want.  
The way the debugger works is exactly the same one as in Chrome.  
If you also want to use the regular "Developper's Tools" from Chrome, press `Ctrl+Shift+I` in the app window. 