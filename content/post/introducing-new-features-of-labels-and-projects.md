---
date: "2023-04-30T13:00:00+08:00"
authors: 
  - "HesterG"
  - "techknowlogick"
title: "Supercharge Your Issue Management Workflow: Introducing Org/User Level Projects, Scoped Labels & Advanced Label Templates"
tags: ["label", "project"]
draft: false
---
Gitea 1.19.0 brings several improvements to issue and pull request management, making it more efficient across different repositories. In this article, we'll discuss three notable new features: Organization/User Level Projects, Scoped Labels, and Advanced Label Templates. Learn how these updates can help optimize your development workflow.

<!--more-->

## Organization/User Level Projects

Organization/user level projects enable efficient issues management and pull requests across **different repositories** within the **same organization/user**. This feature allows you to conveniently track the progress of all issues and pull requests associated with a specific user or organization in one central location.

### Creating Organization/User-Level Projects

Let's use creating an organization-level project as an example:

1. Navigate to your organization page, click the "Projects" tab, and then select the "New Project" button. 

    ![new project](/demos/projects-labels/new-project.png)

2. Complete the project details, including title, description, template, and card preview. 

    > Tip: The "Basic Kanban" template is an excellent choice for project management and progress tracking, while the "Images and Text" option displays images in the card preview, which is particularly useful when an image is attached.

    ![basic kanban](/demos/projects-labels/create-project.png)

### Assigning Issues/Pull Requests to the Project

1. In the sidebar of an issue or pull request, click "Projects".
2. Choose the project to be assigned.

![set project](/demos/projects-labels/set-project.png)

## Scoped Labels

Scoped labels featuring a "/" in their names function as **mutually exclusive** labels. They are ideal for **categorizing** issues and pull requests, making **filtering by labels** a breeze.

For instance, scoped labels can represent priority levels, such as "priority/high" or "priority/low," or denote the responsible team, like "team/front-end" or "team/back-end." This simplifies filtering and searching for issues and pull requests based on their categories.

### Creating Scoped Labels

1. On a repo's Issues/Pull Requests page, click the "Labels" tab and select the "New Label" button.

    ![new label](/demos/projects-labels/new-label.png)

2. Input the label name using the format "**scope/label**" and **check the "Exclusive" box** to signify that the label is mutually exclusive with other "scope/" labels.

    ![create label](/demos/projects-labels/create-label.png)

### Comparing Non-Exclusive Labels and Scoped (Exclusive) Labels

Scoped labels differ from non-exclusive labels in terms of **appearance** and **usage**:

1. Appearance: Scoped labels have a dual-colour background differentiating their scopes from names, while non-exclusive labels feature a single-coloured background.

    ![scoped label](/demos/projects-labels/scoped-labels.png)

2. Usage: Only one label under the same scope can be applied, while non-exclusive labels have no limitations.

    In the example below, labels beginning with "Priority," "Reviewed," and "Status" have scopes, and only one label can be chosen under each scope. Labels starting with "Kind" are non-exclusive, and multiple labels can be selected.

    ![add labels demo](/demos/projects-labels/labels-demo.gif)

> Tip: Once scoped labels are added, use them as categories to streamline searching for issues/pull requests based on categories/scopes.

![filter labels demo](/demos/projects-labels/labels-filter.gif)


## Advanced Label Templates

Advanced Label Templates are YAML files that adhere to the [YAML label format](https://github.com/go-gitea/gitea/blob/main/options/label/Advanced.yaml) and enable you to incorporate **customized sets of labels** into your Gitea instance. These labels **can be configured globally**, offering more control over your repositories' organization.

### Creating and Using Advanced Label Templates

1. In the `$GITEA_CUSTOM/options/label` directory, create a new YAML file named after the label set you wish to make, such as `documentation.yaml` for a set of documentation-related labels.

2. Define the labels using the following format:

    ```yaml
    labels:
    - name: "foo/bar"  # label name appearing in the dropdown
        exclusive: true # indicates whether to use the exclusive namespace for scoped labels. The scoped delimiter is /
        color: aabbcc   # hex color code
        description: Some label # detailed label description
    ```

    > For example, add these labels to `$GITEA_CUSTOM/options/label/documentation.yaml`:
    > ```yaml
    > labels:
    > - name: "Guide/User"
    >    color: 546e7a
    >     description: User guides or user manuals.
    > - name: "Guide/Contributor"
    >     color: 795548
    >     description: Contributor guides or documentation.
    > - name: "Guide/Best-Practice"
    >     color: 4caf50
    >     description: Documentation on best practices or recommended workflows.
    > - name: "Docs/Bug"
    >     exclusive: true
    >     color: ee0701
    >     description: An error or issue in the documentation.
    > - name: "Docs/Enhancement"
    >     exclusive: true
    >     color: 37474f
    >     description: A feature request or improvement to the documentation.
    > - name: "Docs/Formatting"
    >     exclusive: true
    >     color: 795548
    >     description: Documentation related to formatting or styling.
    > - name: "Docs/Api"
    >     exclusive: true
    >     color: 880e4f
    >     description: Documentation of an API or code library.
    > - name: "Docs/Translation"
    >     exclusive: true
    >     color: 546e7a
    >     description: Translations or requests for translation of the documentation.
    > ```

3. Implement the Label Templates

    After creating the label template, you can apply it when generating a label set for a specific repository or an organization. The new label templates will be accessible under the label set dropdown.

    For a specific repository:

    ![select label set](/demos/projects-labels/label-set.png)

    For an organization:

    ![org label set](/demos/projects-labels/org-label-set.png)

4. Use the Labels in Repositories

    The newly created labels can now be used in repositories. Choose the desired label from the label dropdown.

    ![doc labels](/demos/projects-labels/doc-labels.png)

## Streamline Issue and Pull Request Management with Scoped Labels and Organization/User Level Projects

Effectively managing issues and pull requests across multiple repositories can be daunting for organizations and individuals. However, scoped labels and organization/user-level projects provide robust tools for managing and prioritizing work.

Scoped labels enable categorizing issues and pull requests based on priority, responsible team, or other custom requirements.

These labels can be added to multiple repositories to ensure consistency across the organization. Label templates can also be utilized to customize label sets and further streamline the workflow.

Organization/user-level projects can be created to add and track issues and pull requests across different repositories. For instance, an organization with multiple repositories contributing to a single product can create projects for bug fixes, feature releases, and documentation improvements at the organizational level. Labels such as "bugs," "features," and "documentation" can then be scoped and applied to relevant issues and pull requests for better categorization and filtering.

Here is an example of an organization-level project list:

![project list](/demos/projects-labels/project-list.png)

Once issues and pull requests have been categorized, they can be easily managed within a project by simply dragging and dropping cards.
This visual representation allows for easy progress tracking and ensures that everything moves forward as planned.

![card drag demo](/demos/projects-labels/card-drag.gif)

With scoped labels and organization/user-level projects, Gitea 1.19.0 offers powerful features to enhance your issue and pull request management experience. These tools, when used effectively, can significantly improve organization and productivity across your repositories.

In conclusion, implementing scoped labels and organization/user-level projects in Gitea can streamline workflows and consolidate the management of tasks across multiple repositories. This approach enables more effective prioritization and categorization of issues and pull requests, helping organizations ensure timely and efficient project completion.

We'd like to thank the [Blender Foundation](https://blender.org),  [@brechtvl](https://github.com/brechtvl), [@lunny](https://gitea.com/lunny), [@lafriks](https://gitea.com/lafriks), and many others for contributing and reviewing the functionality discussed in this blog post.
