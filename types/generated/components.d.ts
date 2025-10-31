import type { Schema, Struct } from '@strapi/strapi';

export interface CaseStudyDetailsCaseStudyApproachSection
  extends Struct.ComponentSchema {
  collectionName: 'components_case_study_details_case_study_approach_sections';
  info: {
    displayName: 'CaseStudyApproachSection';
  };
  attributes: {
    CardImage1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    CardImage2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Description: Schema.Attribute.Text;
    Lists: Schema.Attribute.Component<'case-study-details.lists', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CaseStudyDetailsCaseStudyChallengeSection
  extends Struct.ComponentSchema {
  collectionName: 'components_case_study_details_case_study_challenge_sections';
  info: {
    displayName: 'CaseStudyChallengeSection';
  };
  attributes: {
    Description: Schema.Attribute.String;
    GridImage1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    GridImage2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    GridImage3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Lists: Schema.Attribute.Component<'case-study-details.lists', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CaseStudyDetailsCaseStudyFeedbackSection
  extends Struct.ComponentSchema {
  collectionName: 'components_case_study_details_case_study_feedback_sections';
  info: {
    displayName: 'CaseStudyFeedbackSection';
  };
  attributes: {
    ClientDetails: Schema.Attribute.Component<
      'case-study-details.client-details',
      false
    >;
    FeedbackMessage: Schema.Attribute.Text;
    ProjectImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Title: Schema.Attribute.String;
  };
}

export interface CaseStudyDetailsCaseStudyHeroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_case_study_details_case_study_hero_sections';
  info: {
    displayName: 'CaseStudyHeroSection';
  };
  attributes: {
    BadgeImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    FeaturedImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    IndustryColumn: Schema.Attribute.String;
    ServicesColumn: Schema.Attribute.String;
    ToolsColumn: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    VisitButtonLink: Schema.Attribute.String;
  };
}

export interface CaseStudyDetailsCaseStudyOverviewSection
  extends Struct.ComponentSchema {
  collectionName: 'components_case_study_details_case_study_overview_sections';
  info: {
    displayName: 'CaseStudyOverviewSection';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    GridImage1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    GridImage2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Title: Schema.Attribute.String;
  };
}

export interface CaseStudyDetailsCaseStudyResultsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_case_study_details_case_study_results_sections';
  info: {
    displayName: 'CaseStudyResultsSection';
  };
  attributes: {
    Column1: Schema.Attribute.Component<
      'case-study-details.results-column',
      false
    >;
    Column2: Schema.Attribute.Component<
      'case-study-details.results-column',
      false
    >;
    Column3: Schema.Attribute.Component<
      'case-study-details.results-column',
      false
    >;
    Column4: Schema.Attribute.Component<
      'case-study-details.results-column',
      false
    >;
    Description: Schema.Attribute.Text;
    MainImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface CaseStudyDetailsCaseStudySeo extends Struct.ComponentSchema {
  collectionName: 'components_case_study_details_case_study_seos';
  info: {
    displayName: 'CaseStudySeo';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Keywords: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface CaseStudyDetailsCaseStudySolutionSection
  extends Struct.ComponentSchema {
  collectionName: 'components_case_study_details_case_study_solution_sections';
  info: {
    displayName: 'CaseStudySolutionSection';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    SliderImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface CaseStudyDetailsClientDetails extends Struct.ComponentSchema {
  collectionName: 'components_case_study_details_client_details';
  info: {
    displayName: 'ClientDetails';
  };
  attributes: {
    AvatarImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ClientName: Schema.Attribute.String;
    ProjectType: Schema.Attribute.String;
  };
}

export interface CaseStudyDetailsLists extends Struct.ComponentSchema {
  collectionName: 'components_case_study_details_lists';
  info: {
    displayName: 'Lists';
  };
  attributes: {
    List: Schema.Attribute.String;
  };
}

export interface CaseStudyDetailsResultsColumn extends Struct.ComponentSchema {
  collectionName: 'components_case_study_details_results_columns';
  info: {
    displayName: 'ResultsColumn';
  };
  attributes: {
    Label1: Schema.Attribute.String;
    Label2: Schema.Attribute.String;
  };
}

export interface CaseStudyTags extends Struct.ComponentSchema {
  collectionName: 'components_case_study_tags';
  info: {
    displayName: 'Tags';
  };
  attributes: {
    Tag: Schema.Attribute.String;
  };
}

export interface CaseStudyTechnologies extends Struct.ComponentSchema {
  collectionName: 'components_case_study_technologies';
  info: {
    displayName: 'Technologies';
  };
  attributes: {
    Technology: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'case-study-details.case-study-approach-section': CaseStudyDetailsCaseStudyApproachSection;
      'case-study-details.case-study-challenge-section': CaseStudyDetailsCaseStudyChallengeSection;
      'case-study-details.case-study-feedback-section': CaseStudyDetailsCaseStudyFeedbackSection;
      'case-study-details.case-study-hero-section': CaseStudyDetailsCaseStudyHeroSection;
      'case-study-details.case-study-overview-section': CaseStudyDetailsCaseStudyOverviewSection;
      'case-study-details.case-study-results-section': CaseStudyDetailsCaseStudyResultsSection;
      'case-study-details.case-study-seo': CaseStudyDetailsCaseStudySeo;
      'case-study-details.case-study-solution-section': CaseStudyDetailsCaseStudySolutionSection;
      'case-study-details.client-details': CaseStudyDetailsClientDetails;
      'case-study-details.lists': CaseStudyDetailsLists;
      'case-study-details.results-column': CaseStudyDetailsResultsColumn;
      'case-study.tags': CaseStudyTags;
      'case-study.technologies': CaseStudyTechnologies;
    }
  }
}
