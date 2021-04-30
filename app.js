import { html } from "htm/preact";
import { useState } from "preact/hooks";

import { IncidentSummary } from "./incident-summary";

export const App = () => {
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      description: "Something happened"
    },
    {
      id: 2,
      description: "Something happened in Namibia"
    },
    {
      id: 3,
      description: "Something happened in Botswana"
    }
  ]);

  const deleteIncident = id => {
    setIncidents(incidents => incidents.filter(i => i.id != id));
  };
  const updateIncident = id => event => {
    setIncidents(incidents => {
      const incidentIndex = incidents.findIndex(i => i.id == id);
      return [
        ...incidents.slice(0, incidentIndex),
        { ...incidents[incidentIndex], description: event.target.value },
        ...incidents.slice(incidentIndex + 1)
      ];
    });
  };

  return html`
    <div class="container pt-2">
      <h1>Incidents</h1>
      ${incidents.map(
        i =>
          html`
            <${IncidentSummary}
              incident=${i}
              key=${i.id}
              deleteIncident=${deleteIncident}
              updateIncident=${updateIncident}
            />
          `
      )}
    </div>
  `;
};
