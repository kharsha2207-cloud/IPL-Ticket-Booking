#include<stdio.h>
void SafePrint(const void *ptr,int type){
    if(ptr==NULL){
        printf("nothing to print\n");
        return ;
    }
    if(type==0)
        printf("Integer value:%d\n",*(const int*)ptr);
    else  if(type==1)
        printf("Float value:%f\n",*(const float*)ptr);
    else 
printf("Invalid type\n");
}
int main(){
    int intArray[5];
    float floatArray[5];
    int *ip=intArray;
    float *fp=floatArray;
    int i,ch,idx;
    printf("Enter 5 integers:\n");
    for(i=0;i<5;i++){
        scanf("%d",ip+i);
    }
    printf("Enter 5 floats:\n");
    for(i=0;i<5;i++){
        scanf("%f",fp+i);
    }
    printf("\n Integers Array:\n");
    for(i=0;i<5;i++){
        printf(" Value:%d\n",*(ip+i));
    }
    printf("\n Floats Array:\n");
    for(i=0;i<5;i++){
        printf(" Value:%f\n",*(fp+i));
    }
    printf("\n 0-Integer 1-Float\nChoice:");
    scanf("%d",&ch);
    printf("Enter index to print:");
    scanf("%d",&idx);
    if(ch==0){
        if(idx>=0 && idx<5){
            SafePrint(ip+idx,ch);
        }
        else{
            SafePrint(NULL,ch);
        }
    }
    else if(ch==1){
        if(idx>=0&&idx<5){
            SafePrint(fp+idx,ch);
        }
        else{
            SafePrint(NULL,ch);
        }
    }
    else {
        printf("Invalid choice\n");
    }
    return 0;
}