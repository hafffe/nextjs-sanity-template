import {RiCalendar2Line} from "react-icons/ri";
import {defineField} from "sanity";
import { getTimeZones } from "@vvo/tzdb";

const googleCalendar = defineField({
  name: "googleCalendar",
  type: "object",
  title: "Google Calendar Embed",
  icon: RiCalendar2Line,
  fields: [
    {
      name: "calendarId",
      type: "string",
      title: "Google Calendar Id",
      validation: Rule => [
        Rule.required(),
      ],
    },
    {
      name: "timezone",
      type: "string",
      initialValue: 'America/New_York',
      title: "Timezone - (Default: America/New_York)",
      options: {
        list:  getTimeZones().map(tz => {
          const timeOffset = tz.rawFormat.substring(0,6);
          return {
            value: tz.name,
            title: `${tz.name} - ${tz.alternativeName} - ${tz.abbreviation} (${timeOffset})`
          };
        }),
      }
    },
  ],
});

export default googleCalendar;
