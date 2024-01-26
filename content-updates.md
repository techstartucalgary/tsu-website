# Content Updates Guide

This guide documents how and when to update different content on the Tech Start UCalgary website, and should be regularly updated, preferably after each feature change.

- [Content Updates Guide](#content-updates-guide)
  - [Homepage](#homepage)
    - [Club statistics](#club-statistics)
    - [Events](#events)
    - [Sponsors](#sponsors)
    - [Social Media](#social-media)
    - [Gallery](#gallery)
  - [Team Page](#team-page)
    - [Profile Pictures](#profile-pictures)
    - [Executives](#executives)
    - [Project Managers](#project-managers)
  - [Projects Page](#projects-page)
    - [Project Logos](#project-logos)
    - [Current Projects](#current-projects)
    - [Past Projects](#past-projects)
  - [Apply Page](#apply-page)
    - [Dev Nights](#dev-nights)
    - [Team Picture](#team-picture)
    - [Applications](#applications)
  - [Resources Page](#resources-page)
    - [Guides](#guides)

## Homepage

### Club statistics

Statistics about our projects and members are set using the `NumberStat` component on the homepage:

```typescript
 <div className="homePage__numberContainer">
            <NumberStat number={10} stat="projects so far" />
            <NumberStat number={92} stat="members so far" />
            <NumberStat
              number={93}
              suffix={"%"}
              stat="enjoyed their involvement"
            />
          </div>
```

The `number` values must be updated at the end of each school year.

### Events

Everything related to events can be found under [src/components/eventsSection](https://github.com/Tech-Start-UCalgary/tsu-website/tree/main/src/components/EventsSection).

Event logos are stored in [src/images/events](https://github.com/Tech-Start-UCalgary/tsu-website/tree/main/src/images/events).

Events can be updated in [EventInformation.ts](https://github.com/Tech-Start-UCalgary/tsu-website/blob/main/src/components/EventsSection/EventInformation.ts)

- An upcoming event should be added to `highlightedEvents`. Please coordinate with the VP Communications and VP Events for when to release upcoming event announcements.
- Once the event is finished, update the event's `link` property to the URL of a recording or post regarding the event on one of our social media channels (typically LinkedIn).

**Note: Please maintain a maximum of 2 past events and 1 upcoming event on the homepage at all times.**

### Sponsors

Everything related to sponsors can be found under [src/components/SponsorSection](https://github.com/Tech-Start-UCalgary/tsu-website/tree/main/src/components/SponsorSection).

Sponsor logos are stored in [src/images/sponsors](https://github.com/Tech-Start-UCalgary/tsu-website/tree/main/src/images/sponsors).

Sponsors can be added/removed by updating the `sponsorList` in [SponsorInfo.ts](https://github.com/Tech-Start-UCalgary/tsu-website/blob/main/src/components/SponsorSection/SponsorsInfo.ts).

### Social Media

You can update our social media outlets via the `SocialMedia` component used in [Footer.tsx](https://github.com/Tech-Start-UCalgary/tsu-website/blob/main/src/components/Footer/Footer.tsx).

For example:

```typescript
  <SocialMedia
    color={SocialMediaColor.Gradient}
    icon={faInstagram}
    link="https://www.instagram.com/techstartucalgary/"
  />
```
### Gallery
Everything related to gallery can be found under [src/components/PhotoGallery](https://github.com/Tech-Start-UCalgary/tsu-website/tree/main/src/components/PhotoGallery)

To Add a new picture visit [TechStart Google Photos Album](https://photos.app.goo.gl/SkVei5N56poqTh8g8)
 - Ask the administrator(s) for credential
 - click add new

To make changes to the server, visit [tsuServer](https://github.com/techstartucalgary/tsuServer)

## Team Page

Everything related to teams can be found under [src/components/TeamSection](https://github.com/Tech-Start-UCalgary/tsu-website/tree/main/src/components/TeamSection).

You can update executives and project managers in [TeamInformation.ts](https://github.com/Tech-Start-UCalgary/tsu-website/blob/main/src/components/TeamSection/TeamInformation.ts).

### Profile Pictures

Team profile pictures are stored in [src/images/team](https://github.com/Tech-Start-UCalgary/tsu-website/tree/main/src/images/team).

- Ensure all team members' profile pictures have the correct dimensions - square is preferred which can be refined for the team section.
- Please save all images as png/jpg/jpeg files and follow the same naming convention.
- Outgoing PMs and execs' profile pictures should be deleted to reduce clutter.

### Executives

`executiveTeam` should be updated by the end of the day of the transition meeting.

e.g.,

```typescript
executiveTeam = [
  {
    id: 0,
    name: "Joel Happ",
    affiliation: "Co-President",
    image: joel_jpg,
    linkedin: "https://www.linkedin.com/in/joel-happ/",
    email: "mailto:joel.happ1@ucalgary.ca",
  },
```

### Project Managers

`projectManagers` should be updated before the club's launch meeting in September every year, depending on when recruitment has ended.

When PM applications are open, `projectManagers` should contain a single element for the blank profile:

```typescript
projectManagers = [
  {
    id: 0,
    name: "You?",
    affiliation: "Apply now at techstartucalgary.com/apply!",
    image: blank_jpg,
    linkedin: " ",
    email: " ",
  },
];
```

## Projects Page

Everything related to projects can be found under [src/components/ProjectSection](https://github.com/Tech-Start-UCalgary/tsu-website/tree/main/src/components/ProjectSection)

You can update all current and past projects in [ProjectData.ts](https://github.com/Tech-Start-UCalgary/tsu-website/tree/main/src/components/ProjectSection/ProjectData.ts).

### Project Logos

Project logos are stored in [src/images/projects](https://github.com/Tech-Start-UCalgary/tsu-website/tree/main/src/images/projects).

- Project logo image sizes should have 16:9 aspect ratio.

### Current Projects

`CurrentProjects` should be populated in the Fall semester and the "Current Projects" section should be added to the Projects page.

### Past Projects

After each showcase, the elements of `CurrentProjects` should be moved to the start of `PastProjects` and each element `id` should be updated with the new indices. The "Current Projects" section should also no longer be visible on the Projects page.

## Apply Page

### Dev Nights

You can update the date/time of dev nights in [ApplyPage.tsx](https://github.com/Tech-Start-UCalgary/tsu-website/blob/main/src/pages/ApplyPage.tsx).

### Team Picture

The team picture should be updated after each showcase, stored in [src/images](https://github.com/Tech-Start-UCalgary/tsu-website/tree/main/src/images).

### Applications

Application status is managed through the `ApplySection` component used in `ApplyPage.tsx`.

- When an application becomes open, set `statusIsOpen` to `true` and  `applicationLink` to the new application URL.
- When an application becomes closed, set `statusIsOpen` to `false`.

Example:


```typescript
<ApplySection
    role="Project Member"
    description="Work and grow as a developer, business strategist, or designer.
                Collaborate with team members on various platforms to build an exciting project for 1 academic year."
    statusIsOpen={false}
    closedStatus="Opens September 2023"
    applicationLink="https://forms.gle/yxVK3NRCyTjn1TxQ7"
    deadline=""
/>

<ApplySection
  role="Project Manager"
  description="Manage a project for 1 year and lead a team of 6-9
                    project members to create complex projects."
  statusIsOpen={true}
  closedStatus="Opens Spring 2023"
  applicationLink="https://forms.gle/oH3i7eKkLg2WfXEXA"
  deadline=""
/>
```

## Resources Page

### Guides

Everything related to guides can be found under [src/components/DocsPageSection](https://github.com/Tech-Start-UCalgary/tsu-website/tree/main/src/components/DocsPageSections).

Guide images are stored in [src/images/guides](https://github.com/Tech-Start-UCalgary/tsu-website/tree/main/src/guides).

You can update guides using the `Guide` component in `GuidesSection`.

Example:

```typescript
<Guide
  guideName="Django Guide"
  link="https://docs.google.com/document/d/1Emq59prVwyzpnOW8CkTfz9FEWE00AH0epGFHji2k_lA/edit?usp=sharing"
  image={imgDjango}
  description="Learn Django, a python-based web framework for building backends, APIs, multi-page applications, and more!"
/>
```
