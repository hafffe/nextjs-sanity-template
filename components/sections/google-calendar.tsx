"use client";
import {GoogleCalendar as GoggleCalendarType} from "~/models/sections/google-calendar";
import {vercelStegaCleanAll} from "@sanity/client/stega";


const DEFAULT_TIMEZONE = "America/New_York";
type Props = {
  data: GoggleCalendarType;
};

const GoogleCalendarBlock = ({data}: Props) => {
  if (!data.calendarId) {
    return null;
  }
  const id = vercelStegaCleanAll(data.calendarId);
  const timezone = encodeURI(vercelStegaCleanAll(data.timezone).toString() || DEFAULT_TIMEZONE);
  const url =`https://calendar.google.com/calendar/embed?src=${id}&ctz=${timezone}&output=embed`;

  return <iframe
    src={url}
    width="800" height="600" frameBorder="0" scrolling="no"></iframe>;
};

export default GoogleCalendarBlock;
