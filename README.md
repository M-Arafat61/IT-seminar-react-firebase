# Website Name: techTalk-seminar-2023

## Hosting URL: <https://techtalk-seminar-2023.web.app>

- ## Project features

### 1. Selecting an event from _`Home`_ page and seeing specific event details.

### 2. While selecting the event navigate to a _`Dynamic Route`_ and showing specific session event Details.

### 2. _`Dynamic Route`_ are private, only registered/logged in user can see it's content.

### 3. From the _`Dynamic Route`_ to _`Private Route`_ page.

### 4. _`Registration`_ and _`Login`_ with _`firebase Email-Password authentication`_ and validation of _Email-Password fields_.

### 5. _`Google & Github`_ login using _`firebase`_.

- ## Implementation of project features

##### 1. _`Home`_ page contains _`navbar`_, _`banner`_ section below navbar, about the event section after that comes _`6 Event Cards`_ below has _`Sponsors section`_ , another section after that contains _`event venue`_ information and lastly _`footer`_ section.

- ##### _`Event Cards`_ has a individual button for showing specific information for that event from _`techtalk.json`_ data.

##### 2. By Clicking on an _`Event Card`_ takes to _dynamic_ _`session-details page`_ where details of that specific session has been showed. `Dynamic session-details` has a button for confirming registration for that event.

- ##### Selecting the button it gives a `confirmation alert`, by clicking more than once shows _duplication_ of registration alert.
- ##### _`session-details page`_ are private. Only registered/logged user can see it.

##### 3. Confirming any session from _dynamic_ _`session-details page`_ saves all information of that `event`. _`My Sessions`_ page get stored information from local storage and shows _detailed session events_.

- ##### _`My Sessions page`_ has a button it takes user to `Moonlight Melodies page`.
- ##### _`My Sessions page`_ are also a _private route_.

##### 4. Navbar right side has a _`login button`_ that takes user to _`login page`. If user not registered can register going to _`registration page`_ by clicking login page's bottom `register link`. Registration and login functionalities are managed by _`firebase Email-Password authentication`\_. While registering, if password doesn't contains `one uppercase,one special character or minimum 6 characters` it gives an alert.

##### 5. _`Google & Github`_ login using _`firebase`_ are implemented both in `login` and `registration` _page_. By clicking `google` or `github` button login can be completed.
