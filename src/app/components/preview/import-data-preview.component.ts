import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { ComponentDependencies } from '../../../di';
import { BaseComponent } from '../../core/base.component';
import { ActiveType, IDataPreviewWrapper, IItemPreview, IItemPreviewWithIndex } from './preview-models';

interface ITypeInfo {
  title: string;
  type: ActiveType,
  getItems: (data: IDataPreviewWrapper) => IItemPreview[]
}

@Component({
  selector: 'lib-import-data-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './import-data-preview.component.html',
})
export class ImportDataPreview extends BaseComponent implements OnInit {

  @Input() previewData?: IDataPreviewWrapper;

  private activeType?: ActiveType;
  public previewedItem?: IItemPreviewWithIndex;

  public get activePreviewedItem(): IItemPreviewWithIndex | undefined {
    if (this.previewedItem) {
      return this.previewedItem;
    }

    if (!this.activeItems) {
      return undefined;
    }

    if (this.activeItems.length > 0) {
      const firstItem = this.activeItems[0];
      return {
        data: firstItem.data,
        index: 0,
        title: firstItem.title
      }
    }
    return undefined;
  }

  public readonly types: ITypeInfo[] = [
    {
      title: 'Content types',
      type: 'contentTypes',
      getItems: (data) => data.contentTypes
    },
    {
      title: 'Content type snippets',
      type: 'contentTypeSnippets',
      getItems: (data) => data.contentTypeSnippets
    },
    {
      title: 'Content items',
      type: 'contentItems',
      getItems: (data) => data.contentItems
    },
    {
      title: 'Taxonomies',
      type: 'taxonomies',
      getItems: (data) => data.taxonomies
    },
    {
      title: 'Languages',
      type: 'languages',
      getItems: (data) => data.languages
    },
    {
      title: 'Language variants',
      type: 'languageVariants',
      getItems: (data) => data.languageVariants
    },
    {
      title: 'Assets',
      type: 'assets',
      getItems: (data) => data.assets
    },
    {
      title: 'Asset folders',
      type: 'assetFolders',
      getItems: (data) => data.assetFolders
    },
    {
      title: 'Data inconsistencies',
      type: 'dataInconsistencies',
      getItems: (data) => data.dataInconsistencies
    },
  ];

  public activeItems: IItemPreview[] = [];

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef) {
    super(dependencies, cdr);
  }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (this.previewData && !this.activeType) {
      this.activeItems = this.previewData.contentTypes;
      this.activeType = 'contentTypes';
    }
  }

  previewItem(item: IItemPreview, index: number): void {
    this.previewedItem = {
      data: item.data,
      index: index,
      title: item.title
    };
    super.markForCheck();
  }

  setType(type: ITypeInfo): void {
    if (!this.previewData) {
      return;
    }

    this.activeType = type.type;
    this.previewedItem = undefined;
    this.activeItems = type.getItems(this.previewData);
    super.markForCheck();
  }
}
