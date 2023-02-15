# Firefox Policies
A `policies.json` file contained in a `distribution` directory in the installation directory of Firefox.
>Used to change specific behavior of the client.

##### Installation:
###### Windows:
- Make a junction of `firefox/distribution` in the `.exe`'s directory. Usually located at: `C:\Program Files\Mozilla Firefox`.

###### Mac:
- Make a symlink from `firefox/distribution` to `Firefox.app/Contents/Resources/distribution`

###### Linux:
- **System Wide:** Make a symlink from `firefox/distribution/policies.json` to `/etc/firefox/policies/policies.json`
- **Per Distro:** Make a symlink from `firefox/distribution` to `firefox/distribution`.
  - Install path varies based on different distros.
