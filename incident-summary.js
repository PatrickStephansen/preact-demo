import { html } from "htm/preact";
import { useEffect } from "preact/hooks";

export const IncidentSummary = ({
  incident,
  deleteIncident,
  updateIncident
}) => {
  return html`
    <div class="card">
      <div class="card-body">
        <h3>${incident.description}</h3>
        <input
          class="form-control"
          value=${incident.description}
          oninput=${updateIncident(incident.id)}
        />
        <button
          type="button"
          class="btn btn-danger"
          onclick=${() => deleteIncident(incident.id)}
        >
          Delete
        </button>
      </div>
    </div>
  `;
};
