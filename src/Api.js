export function fake_api_request(path) {
  switch(path) {
    case "/ads":
      return {
        "ads": [
          {
            "id": 1,
            "remote_id": "123",
            "name": "123",
            "status": "ACTIVE",
          },
          {
            "id": 2,
            "remote_id": "456",
            "name": "456",
            "status": "ACTIVE",
          },
          {
            "id": 3,
            "remote_id": "789",
            "name": "789",
            "status": "ACTIVE",
          },
          {
            "id": 4,
            "remote_id": "901",
            "name": "901",
            "status": "ACTIVE",
          },
        ]
      }
    case "/ads_metrics":
      return {
        "column_names": [
              "impressions",
              "reach",
              "frequency",
              "cpm",
              "spend",
              "ctr",
              "cost_per_inline_link_click",
              "actions:goal",
              "actions:link_click",
              "cost_per_action_type:cost_per_goal",
              "actions:offsite_conversion"
            ],
        "rows": [
              {
                "remote_id": "456",
                "impressions": "123",
                "reach": 123,
                "frequency": 1.0413449389302,
                "cpm": 12.30131445905,
                "spend": 182.49,
                "ctr": 0.87630603303,
                "cost_per_inline_link_click": 3.0415,
                "actions:goal": 3,
                "actions:link_click": 60,
                "cost_per_action_type:cost_per_goal": 60.83,
                "actions:offsite_conversion": 456
              },
              {
                "remote_id": "123",
                "impressions": "123",
                "reach": 123,
                "frequency": 1.0413449389302,
                "cpm": 12.30131445905,
                "spend": 182.49,
                "ctr": 0.87630603303,
                "cost_per_inline_link_click": 3.0415,
                "actions:goal": 3,
                "actions:link_click": 60,
                "cost_per_action_type:cost_per_goal": 60.83,
                "actions:offsite_conversion": 123
              },
              {
                "remote_id": "789",
                "impressions": "123",
                "reach": 123,
                "frequency": 1.0413449389302,
                "cpm": 12.30131445905,
                "spend": 182.49,
                "ctr": 0.87630603303,
                "cost_per_inline_link_click": 3.0415,
                "actions:goal": 3,
                "actions:link_click": 60,
                "cost_per_action_type:cost_per_goal": 60.83,
                "actions:offsite_conversion": 789
              },
              {
                "remote_id": "901",
                "impressions": "123",
                "reach": 123,
                "frequency": 1.0413449389302,
                "cpm": 12.30131445905,
                "spend": 182.49,
                "ctr": 0.87630603303,
                "cost_per_inline_link_click": 3.0415,
                "actions:goal": 3,
                "actions:link_click": 60,
                "cost_per_action_type:cost_per_goal": 60.83,
                "actions:offsite_conversion": 901
              }
            ]
        }
    default:
      return null;
  }
}