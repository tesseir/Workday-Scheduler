# 05 Third-Party APIs: Work Day Scheduler

Github Repo: https://github.com/tesseir/Workday-Scheduler

Deployed Page: https://tesseir.github.io/Workday-Scheduler/

## Image of use:

![Page](https://raw.githubusercontent.com/tesseir/Workday-Scheduler/main/Assets/Capture.PNG)

## Usage

Download the files to your local drive, and run "Index.HTML" on Chrome. Once there, right click anywhere on the screen and click "Select Element". Once thats done youll be able to see the console, which will help you decide what to study first!

Please download all files to your pc, and keep them together in the folder "workday-scheduler" as they are crucial to the site working properly.

When opening the page, you will see todays date and time in the header. it does not update as the time changes, only grabs the time from when it was loaded. Reload the page for the (then) current time.

You will be able to write into the text area and save it, which will push what you write to local storage and will be written into the field automatically. to edit, simply just write in the field again and press save. to delete, delete all text in the field and press save.


## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

