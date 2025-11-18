export interface TestTemplate {
  id: number;
  title: string;
  repo_download_url: string;
  test_slug: string;
}

export interface Session {
  session_token: string;
  status: "in_progress" | "submitted";
  candidate_email: string;
  testTemplate: TestTemplate;
}
