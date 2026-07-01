import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

export interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

@Component({
  selector: 'app-faq-content-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './faq-content-component.html',
})
export class FaqContentComponent {
  activeCategory = 'engagements';

  categories: FaqCategory[] = [
    {
      id: 'engagements',
      label: 'Engagements & Process',
      items: [
        {
          question: 'How does a typical engagement start?',
          answer: 'We begin with a brief discovery call to understand your goals and challenges. From there, we draft a one-page project memo outlining scope, timeline, and approach — usually within 48 hours.',
          open: true
        },
        {
          question: 'How long does a typical project take?',
          answer: 'Most projects range from 3 to 6 months depending on complexity. We provide a detailed timeline after the discovery phase and keep you updated throughout every milestone.',
          open: false
        },
        {
          question: 'What does your development process look like?',
          answer: 'We follow an agile methodology with two-week sprints. Each sprint includes planning, development, testing, and a review session with your team to ensure we stay aligned with your vision.',
          open: false
        },
        {
          question: 'Do you offer post-launch support?',
          answer: 'Yes. We offer flexible support and maintenance plans after launch — from bug fixes to feature enhancements. Our team remains available to ensure smooth operation of your product.',
          open: false
        }
      ]
    },
    {
      id: 'pricing',
      label: 'Pricing & Contracts',
      items: [
        {
          question: 'How do you price your services?',
          answer: 'We offer both fixed-price and time-and-materials models. The right fit depends on how clearly defined your requirements are. We\'ll recommend the best structure after our discovery call.',
          open: true
        },
        {
          question: 'Do you offer fixed-price contracts?',
          answer: 'Yes. For well-scoped projects, we provide fixed-price contracts with clearly defined deliverables and milestones. This gives you full cost predictability from day one.',
          open: false
        },
        {
          question: 'What payment terms do you offer?',
          answer: 'We typically work with milestone-based payments — an initial deposit, payments tied to sprint completions, and a final payment upon delivery. Custom arrangements can also be discussed.',
          open: false
        },
        {
          question: 'Are there any hidden fees or charges?',
          answer: 'No. All costs are outlined transparently in the contract before work begins. Any out-of-scope changes are quoted separately and require your approval before proceeding.',
          open: false
        }
      ]
    },
    {
      id: 'security',
      label: 'Security & Privacy',
      items: [
        {
          question: 'How do you handle data security?',
          answer: 'We follow industry-standard security practices including encrypted communications, secure code reviews, and regular vulnerability assessments. All sensitive data is handled in compliance with applicable regulations.',
          open: true
        },
        {
          question: 'Do you sign NDAs?',
          answer: 'Absolutely. We sign NDAs before any project discussions begin. Your business ideas, data, and proprietary information remain strictly confidential throughout and after our engagement.',
          open: false
        },
        {
          question: 'Who owns the code and intellectual property after the project?',
          answer: 'You do. Upon final payment, full ownership of all source code and intellectual property transfers to you. We retain no rights to the work we build for you.',
          open: false
        },
        {
          question: 'How is client data stored and protected?',
          answer: 'Client data is stored on secure, access-controlled infrastructure. We use role-based permissions, encrypted storage, and regular backups to ensure your data is always protected and recoverable.',
          open: false
        }
      ]
    }
  ];

  get activeSection(): FaqCategory | undefined {
    return this.categories.find(c => c.id === this.activeCategory);
  }

  get activeCategoryIndex(): number {
    return this.categories.findIndex(c => c.id === this.activeCategory);
  }

  selectCategory(id: string): void {
    this.activeCategory = id;
  }

  toggleItem(item: FaqItem): void {
    item.open = !item.open;
  }
}
